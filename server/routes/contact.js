const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

module.exports = router;
