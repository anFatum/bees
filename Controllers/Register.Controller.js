const registerService = require("../Services/Register.Service");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");
const userService = require("../Services/User.Service");
const mailer = require("../Helpers/Mail.Helper");


module.exports.createUser = async (req, res, next) => {

    const passwordFacilities = userService.hashPassword(req.body.password);


    const new_user = {
        ...req.body,
        passHash: passwordFacilities.key,
        passSalt: passwordFacilities.salt
    };

    const token = jwt.sign({email: new_user.email}, Config.jwtSecret);

    const user = await registerService.createUser(new_user);

    if (user) await mailer.sendConfirmation(req.header('host'),new_user.email, token);

    res.json({
        message: "Created"
    })
};

module.exports.confirmEmail = async (req, res, next) => {

    const decoded = jwt.decode(req.query.token, Config.jwtSecret);

    await registerService.confirmUser(decoded.email);

    res.json({
        message: "Confirmed"
    })
};