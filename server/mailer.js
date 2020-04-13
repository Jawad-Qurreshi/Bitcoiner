const mailer = require('nodemailer');
const config = require('./config');


const transportOptions = {
    service: 'gmail',
    auth: {
        user: config.email.USER,
        pass: config.email.PASS
    }
}

const tansporter = mailer.createTransport(transportOptions);


const mailOptions = {
    to: '',
    from: config.email.USER,
    subject: '',
    html: ''

}

const sendVerificationMail = to => {
    mailOptions.to = to;
    mailOptions.subject = 'E-Mail Verification - Bitcoiner';
    mailOptions.html = '<h1>BITCOINER</h1>'
        + '<p>Welcome to Bitcoiner!</p>';
    tansporter.sendMail(mailOptions, (err, info) => {
        if (!err) {

        } else {

        }
    });
};

const sendPasswordRecoveryEmail = to => {
    mailOptions.to = to;
    mailOptions.subject = 'Password Recovery Request - Bitcoiner';
    mailOptions.html = '<h1>BITCOINER</h1><p></p>'

    tansporter.sendMail(mailOptions, (err, info) => {
        if (!err) {

        } else {

        }
    });
};

module.exports = {
    sendPasswordRecoveryEmail,
    sendVerificationMail
}