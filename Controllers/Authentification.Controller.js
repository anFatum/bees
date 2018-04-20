const authService = require("../Services/Authentification.Service");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Config = require("../Configs/Server.Config");
const HttpError = require("../error");

module.exports.confirmAuth = async (req, res, next) => {
    const user = req.body.email ? await authService.findEmailUser(req.body.email) : await authService.findLoginUser(req.body.login);
    if (user) {
        const key = crypto.pbkdf2Sync(req.body.password, user.passSalt, 100000, 64, 'sha512').toString("hex");
        if (user.passHash === key) {
            res.json({
                user: user,
                jwt: jwt.sign({user: user}, Config.jwtSecret)
            });
        } else throw new HttpError(426, 'Password is not valid');
    } else throw new HttpError(404, 'User not found');
};
