const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'cocacola1605@gmail.com',
        pass: '020598xc'
    }
});

module.exports.sendConfirmation = function (host, mail, token) {
    const url = "http://" + host + "/register/confirm-email?token=" + token;
    const mailOptions = {
        from: '"bees-confirmation" <no-reply@bees.com>',
        to: email,
        subject: 'Email confirmation',
        text: 'Please click link below to confirm email address',
        html: '<a href=' + url + '>Click here to confirm</a>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
};

module.exports.sendForgot = function (host, email, token) {
    const url = "http://" + host + "/auth/forgotPassword?token=" + token;
    // console.log(url);
    const mailOptions = {
        from: '"bees-confirmation" <no-reply@bees.com>',
        to: email,
        subject: 'Forgot password',
        text: 'Please click link below to change password',
        html: '<a href=' + url + '>'+url+'</a>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
};