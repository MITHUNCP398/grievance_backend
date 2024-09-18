// mailService.js

const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use 'hotmail', 'yahoo', etc.
  auth: {
    user: 'mithun.thavam304@gmail.com', // Your email address
    pass: 'mithuthavam'   // Your email password or an app-specific password
  }
});

// Function to send an email
const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: 'mithun.thavam304@gmail.com', // Sender address
      to: 'mithuncp398@gmail.com', // List of receivers (can be an array or a single email)
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
