// --- SET UP
const nodemailer = require('nodemailer');
const { email } = require('../conf');
const fs = require('fs');
const emailText = JSON.parse(fs.readFileSync('../emailTexts.json'));

// send mail
async function sendMail(type, to) {
    
    try {
        // set the transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6e7e69f1123139",
                pass: "d7b3f716f6ce9b"
            }
        });
        // set the mail
        const theEmail = typeMail(type, to);
        // send the mail
        transporter.sendMail(theEmail).then((info) => { return true }).catch((err) => { return false });
    } catch (error) {
        return false
    }
}

function typeMail(type, to) {
    try {
        const theEmail = {
            from: email,
            to,
            subject: emailText[type].subject,
            text: emailText[type].text,
        }
        return theEmail;
    } catch (error) {
        return false
    }
}

module.exports = {
    sendMail,
}