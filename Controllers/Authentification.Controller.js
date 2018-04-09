const authService = require("../Services/Authentification.Service");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");

module.exports.confirmAuth = async (req, res, next) => {
    const user = req.body.email ? await authService.findEmailUser(req.body.email) : await authService.findLoginUser(req.body.login);
    const key = crypto.pbkdf2Sync(req.body.password, user.passSalt, 100000, 512, 'sha512').toString("hex");
    if (!user && user.passHash===key) {
        res.json({
            user: user,
            jwt: jwt.sign({user: user},Config.jwtSecret)
        });
    } else
        res.json({
            message:"error"
        });
};