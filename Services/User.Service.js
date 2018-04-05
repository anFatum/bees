const UserModel = require("../Models/User.Model")


module.exports.createUser = async userData => await UserModel.create(userData);
module.exports.getUsers = async () => await UserModel.find();