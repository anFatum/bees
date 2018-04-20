const db = require("../Libs/sequelize.lib").db;
const UserModel = db['UserModel'];

module.exports.findEmailUser = async userEmail => await UserModel.findOne({email:userEmail});

module.exports.findLoginUser = async userLogin => await UserModel.findOne({login:userLogin});