// mailService.js

const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.PASSWORD   // Your email password or an app-specific password
  }
});


// Function to send an email
const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from:  process.env.EMAIL, // Sender address
      to: process.env.EMAIL2, // List of receivers (can be an array or a single email)
      subject: subject, // Subject line
      text: text, // Plain text body
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendMail;
