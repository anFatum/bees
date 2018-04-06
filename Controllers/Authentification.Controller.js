const authService = require("../Services/Authentification.Service");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");

module.exports.confirmAuth = async (req, res, next) => {
    let key;
    let user;
    if (req.body.email!==undefined){
        user = await authService.findEmailUser(req.body.email);
        key = crypto.pbkdf2Sync(req.body.password, user.passSalt, 100000, 512, 'sha512').toString("hex");

    } else if (req.body.login!==undefined){
        user = await authService.findLoginUser(req.body.login);
        key = crypto.pbkdf2Sync(req.body.password, user.passSalt, 100000, 512, 'sha512').toString("hex");

    }
    if (user!==undefined && user.passHash===key) {
        res.json({
            user: user,
            jwt: jwt.sign({user: user},Config.jwtSecret)
        });
    } else
        res.json({
            message:"error"
        });
};
