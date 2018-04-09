const UserModel = require("../Models/User.Model");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'cocacola1605@gmail.com',
        pass: '160599as'
    }
});

module.exports.sendConfirmation = function (email, token) {
    const url = "http://localhost:3000/register/confirm-email?token=" + token;
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

module.exports.createUser = async userData => await UserModel.create(userData);

module.exports.confirmUser = async userEmail => await UserModel.find({email: userEmail}).update({isConfirmed: true});