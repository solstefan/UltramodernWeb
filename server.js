const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can choose any available port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const userEmail = req.body.email;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    

    const mailOptions = {
        from: 'your_email@gmail.com', // Replace with your email
        to: 'your_email@gmail.com', // Replace with the email where you want to receive submissions
        subject: 'New Waitlist Submission',
        text: `New email submission: ${userEmail}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent:', info.response);
        res.send('Submission successful!'); // Send a response to the client
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
