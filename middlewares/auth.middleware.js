const jwt = require("jsonwebtoken");
const HttpError = require("../error");
const Config = require("../Configs/Server.Config");
const authService = require("../Services/Authentification.Service");

module.exports.jwtCheck = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return next(new HttpError(400, 'Token not found'));
    const decoded = jwt.decode(token, Config.jwtSecret);
    const user = await authService.findEmailUser(decoded.email);
    if (!user) return next(new HttpError(404, 'User not found'));
    req.user = user;
    return next();
};