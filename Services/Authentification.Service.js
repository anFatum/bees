const UserModel = require("../Models/User.Model")

module.exports.findEmailUser = async userEmail => await UserModel.findOne({email:userEmail});

module.exports.findLoginUser = async userLogin => await UserModel.findOne({login:userLogin});