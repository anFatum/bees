const registerService = require("../Services/Register.Service");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");
const nodemailer = require("nodemailer");

const hashPassword = function (password) {
    const salt = crypto.randomBytes(16)
        .toString("hex");
    const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512').toString("hex");
    return [salt, key];
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'cocacola1605@gmail.com',
        pass: '160599as'
    }
});

const sendConfirmation = function (email, token) {
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

module.exports.createUser = async (req, res, next) => {

    const passwordFacilities = hashPassword(req.body.password);

    const new_user = {
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        passHash: passwordFacilities[1],
        passSalt: passwordFacilities[0],
        isConfirmed: false,
        isActive: true,
        age: req.body.age,
        surname: req.body.surname,
        phone: req.body.phone
    };

    const token = jwt.sign({email: new_user.email}, Config.jwtSecret);

    console.log(token);

    await sendConfirmation(new_user.email, token);

    const user = await registerService.createUser(new_user);

    res.json({
        message: "OK"
    })
};

module.exports.confirmEmail = async (req, res, next) => {

    const decoded = jwt.decode(req.query.token, Config.jwtSecret);

    const a = await registerService.confirmUser(decoded.email);

    console.log(a);

    res.json({
        message: "OK"
    })
};