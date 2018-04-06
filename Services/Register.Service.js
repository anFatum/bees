const UserModel = require("../Models/User.Model")


module.exports.createUser = async userData => await UserModel.create(userData);

module.exports.confirmUser = async userEmail => UserModel.find({email:userEmail}).update({isConfirmed:true});