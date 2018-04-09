const registerService = require("../Services/Register.Service");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");
const userService = require("../Services/User.Service");


module.exports.createUser = async (req, res, next) => {

    const passwordFacilities = userService.hashPassword(req.body.password);


    const new_user = {
        ...req.body,
        passHash: passwordFacilities.key,
        passSalt: passwordFacilities.salt
    };

    const token = jwt.sign({email: new_user.email}, Config.jwtSecret);

    await registerService.sendConfirmation(new_user.email, token);

    const user = await registerService.createUser(new_user);

    res.json({
        message: "OK"
    })
};

module.exports.confirmEmail = async (req, res, next) => {

    const decoded = jwt.decode(req.query.token, Config.jwtSecret);

    await registerService.confirmUser(decoded.email);

    res.json({
        message: "OK"
    })
};