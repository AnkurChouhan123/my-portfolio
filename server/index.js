const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Email transporter
let transporter;
try {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration missing. Please check your .env file.');
  }

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify the transporter
  transporter.verify(function(error, success) {
    if (error) {
      console.error('Transporter verification failed:', error);
    } else {
      console.log('Server is ready to send emails');
    }
  });
} catch (error) {
  console.error('Email transporter setup failed:', error);
}

// Message Schema
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Message saved to MongoDB');

    // Check if email transporter is configured
    if (!transporter) {
      throw new Error('Email service not configured');
    }

    // Send email
    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return success if MongoDB save worked
      res.status(201).json({ 
        message: 'Message saved but email delivery failed',
        warning: 'Email notification could not be sent'
      });
    }
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ 
      error: 'Failed to process message',
      details: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email User:', process.env.EMAIL_USER ? 'Configured' : 'Missing');
  console.log('Email Password:', process.env.EMAIL_PASS ? 'Configured' : 'Missing');
}); 