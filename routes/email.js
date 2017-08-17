const express = require('express');
const router = express.Router();
const Email = require('../models/email');
const helper = require('sendgrid').mail;
const mailer = require('../config/mailerconfig');

router.post('/email', function(req, res, next) {
    let newEmail = new Email({
        name: req.body.name,
        email: req.body.email
    });
    Email.addEmail(newEmail, (err, email) => {
        if (err) {
            res.json({ success: false, msg: 'failed to register user' });
        } else {
            res.json({ success: true, msg: 'Email successfully sent' });
        }
    });
    const fromEmail = new helper.Email(mailer.fromEmail);
    const toEmail = new helper.Email(mailer.toEmail);
    const subject = 'Hey Paige, you have a new customer';
    const content = new helper.Content('text/plain', 'Here is the Name: ' + newEmail.name + ' and Email: ' + newEmail.email);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    const sg = require('sendgrid')(mailer.key);
    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });
});

module.exports = router;