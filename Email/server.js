const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const connection = require('./db'); 
const cors=require('cors')
require('dotenv').config();  

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL, 
        pass: process.env.PASSWORD    
    }
});

const htmlTemplate = (AdminName,AdminMail,AdminPhoneNum) => `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
        
        <!-- Header Section -->
        <div style="padding: 20px; background: linear-gradient(to right, #007bff, #00d4ff); text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <div style="display: flex; align-items: center; justify-content: center;">
                <img src="https://res.cloudinary.com/dalzs7bc2/image/upload/v1725259921/logo_ksostb.png" alt="Company Logo" style="max-width: 80px; border-radius: 10px; background-color: #ffffff; padding: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); margin-right: 15px;">
                <h2 style="color: #fff; margin: 0; font-size: 24px; display: inline;">New Admin Registered</h2>
            </div>
        </div>

        <!-- Content Section -->
        <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.6;"><strong>Name:</strong> ${AdminName}</p>
            <p style="font-size: 16px; line-height: 1.6;">
                <strong>Email:</strong> <span style="word-wrap: break-word; overflow-wrap: break-word;">${AdminMail}</span> 
                <strong>Phone Number:</strong> ${AdminPhoneNum}
            </p> 
            <p style="font-size: 16px; line-height: 1.6;">Please review the registration:</p>
            
            <!-- Action Buttons -->
            <div style="text-align: center; margin-top: 20px;">
                <a href="http://localhost:5001/admin/accept?email=${AdminMail}" style="display: inline-block; background-color: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); transition: background-color 0.3s ease;">
                    Accept
                </a>
                <a href="http://localhost:5001/admin/reject?email=${AdminMail}" style="display: inline-block; background-color: #dc3545; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); transition: background-color 0.3s ease;">
                    Reject
                </a>
            </div>
        </div>

        <!-- Footer Section -->
        <div style="margin-top: 30px; padding: 20px; font-size: 14px; color: #777; text-align: center; background-color: #f9f9f9; border-top: 1px solid #dddddd;">
            <p style="margin: 0;">Thank you,</p>
            <p style="margin: 5px 0 10px;">VTS Support Team</p>
            <p style="margin: 0;">
                <a href="mailto:hr@vtshrteam.com" style="color: #007bff; text-decoration: none;">hr@vtshrteam.com</a> | +91 9141725777
            </p>
        </div>
    </div>
</body>


`;
const acceptEmailTemplate = (AdminName,AdminMail,AdminPassword) => `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="padding: 20px; background: linear-gradient(to right, #28a745, #6fdc8a); text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <h2 style="color: #fff; margin: 0;">Congratulations!</h2>
            </div>
            <div style="padding: 20px;">
                <h3 style="font-size: 20px; margin: 0;">Hello ${AdminName},</h3>
                <p style="font-size: 16px; line-height: 1.6;">You have been accepted as an admin for the Admin Portal.</p>
                <p style="font-size: 16px; line-height: 1.6;">We are excited to have you on board!</p>
                 <p style="font-size: 16px; line-height: 1.6;">Your Login Credentials are follows😍:</p>
                             <p style="font-size: 16px; line-height: 1.6;"><strong>Email:</strong> ${AdminMail}</p>
                            <p style="font-size: 16px; line-height: 1.6;"><strong>Password:</strong> ${AdminPassword}</p>
                <div style="margin-top: 20px; text-align: center;">
                    <a href="http://localhost:3000/login" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Access the Portal</a>
                </div>
            </div>
            <div style="padding: 20px; font-size: 14px; color: #777; text-align: center;">
                <p>Thank you,</p>
                <p>The Driver Portal Team</p>
            </div>
        </div>
    </body>
`;


const rejectEmailTemplate = (name) => `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="padding: 20px; background: linear-gradient(to right, #dc3545, #f4a6a8); text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <h2 style="color: #fff; margin: 0;">Application Update</h2>
            </div>
            <div style="padding: 20px;">
                <h3 style="font-size: 20px; margin: 0;">Hello ${name},</h3>
                <p style="font-size: 16px; line-height: 1.6;">Unfortunately, your request to become an admin for the Driver Portal has been rejected.</p>
                <p style="font-size: 16px; line-height: 1.6;">Thank you for your interest, and we wish you all the best in your future endeavors.</p>
                <div style="margin-top: 20px; text-align: center;">
                   <a href="http://localhost:3000/" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Return to Homepage</a>
                </div>
            </div>
            <div style="padding: 20px; font-size: 14px; color: #777; text-align: center;">
                <p>Thank you,</p>
                <p>The Driver Portal Team</p>
            </div>
        </div>
    </body>
`;

async function sendMail(toEmail, subject, htmlContent) {
    const info = await transporter.sendMail({
        from: process.env.USER_EMAIL,  
        to: toEmail,                   
        subject: subject,
        html: htmlContent
    });
    return info.messageId;
}


app.post('/register', (req, res) => {
    const { AdminName, AdminMail, AdminPhoneNum } = req.body;
    const randomPassword = Math.random().toString(36).slice(-8);  


    const sql = `INSERT INTO admins (AdminName,AdminMail,AdminPhoneNum,AdminPassword) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [AdminName, AdminMail, AdminPhoneNum, randomPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }
        
       
        sendMail('akoundinyadurga@gmail.com', "New Admin Registered", htmlTemplate(AdminName, AdminMail, AdminPhoneNum))
            .then(messageId => res.status(200).send(`Email sent for review. ID: ${messageId}`))
            .catch(err => res.status(500).send('Error sending review email: ' + err));
    });
});


app.get('/admin/accept', (req, res) => {
    const Admin = req.query.AdminMail;

    // Step 1: Fetch the admin details from the database
    const sqlGetAdmin = `SELECT AdminName,AdminMail,AdminPassword FROM AdminDetails WHERE AdminEmail = ?`;
    connection.query(sqlGetAdmin, [AdminMail], (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }

        if (results.length === 0) {
            return res.status(404).send('Admin not found');
        }

        // Fetch name, email, and password from the database
        const { AdminName, AdminMail,AdminPassword } = results[0];

        // Step 2: Update the admin's status to accepted (status = 1)
        const sqlUpdateStatus = `UPDATE AdminDetails SET IsApproved = 1 WHERE AdminMail = ?`;
        connection.query(sqlUpdateStatus, [AdminMail], (err, updateResults) => {
            if (err) {
                return res.status(500).send('Database error: ' + err);
            }

            // Step 3: Send the acceptance email with the correct details
            sendMail(AdminMail, "Admin Approval", acceptEmailTemplate(AdminName,AdminMail,AdminPassword))
                .then(messageId => {
                    res.status(200).send(`
                       <h2>Admin accepted successfully</h2>
                       <p>An approval email has been sent to ${AdminMail}.</p>
                    `);
                })
                .catch(err => {
                    res.status(500).send('Error sending acceptance email: ' + err);
                });
        });
    });
});



app.get('/admin/reject', (req, res) => {
    const AdminEmail = req.query.Admin;
    const name = "Admin";  

 
    const sql = `UPDATE AdminDetails SET IsApproved = 0 WHERE AdminMail = ?`;
    connection.query(sql, [AdminEmail], (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }

       
        sendMail(AdminEmail, "Admin Rejection", rejectEmailTemplate(AdminName))
            .then(messageId => {
                res.status(200).send(`
                   <h2>Admin rejected successfully</h2>
                   <p>A rejection email has been sent to ${AdminEmail}.</p>
                `);
            })
            .catch(err => {
                res.status(500).send('Error sending rejection email: ' + err);
            });
    });
});
app.get('/login', (req, res) => {
    const { AdminEmail,AdminPassword } = req.body;

    const sql = `SELECT * FROM AdminDetails WHERE AdminMail = ? AND AdminPassword = ? AND IsApproved = 1`;


    connection.query(sql, [AdminEmail,AdminPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Database error: ' + err);
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid email, password, or inactive account.');
        }
        res.status(200).send('Login successful!');
    });
});
app.listen(5001, () => {
    console.log('Server running on http://localhost:5001');
});
