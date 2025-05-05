const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message'); // Assuming your schema is in models/Message.js

const router = express.Router();

// POST request to handle the contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Save the message to the database
  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();

    // Create the email message
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send the email to your email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message:
${message}`,
    };

    // Send the email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email.' });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Message sent successfully!' });
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ error: 'Failed to save message to the database.' });
  }
});

module.exports = router;
