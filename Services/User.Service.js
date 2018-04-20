const db = require("../Libs/sequelize.lib").db;
const crypto = require("crypto");
const UserModel = db['UserModel'];


module.exports.hashPassword = function (password) {
    const salt = crypto.randomBytes(16)
        .toString("hex");
    const key = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString("hex");
    return {salt, key};
};


module.exports.getUsers = async () => await UserModel.findAll();

module.exports.deleteUsers = async () => await UserModel.destroy({where: {}});

