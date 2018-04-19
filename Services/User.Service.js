const UserModel = require("../Models/User.Model");
const crypto = require("crypto");


module.exports.hashPassword = function (password) {
    const salt = crypto.randomBytes(16)
        .toString("hex");
    const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512').toString("hex");
    return {salt, key};
};


module.exports.getUsers = async () => await UserModel.find();

module.exports.deleteUsers = async () => await UserModel.remove();