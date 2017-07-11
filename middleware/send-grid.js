const helper = require('sendgrid').mail;
const fromEmail = new helper.Email('joshmurph316@gmail.com');
const toEmail = new helper.Email('joshmurph316@gmail.com');
const subject = 'Sending with SendGrid is Fun';
const content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
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