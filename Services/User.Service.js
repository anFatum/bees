const UserModel = require("../Models/User.Model")

module.exports.getUsers = async () => await UserModel.find();

module.exports.deleteUsers = async () => await UserModel.remove();