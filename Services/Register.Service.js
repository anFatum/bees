const db = require("../Libs/sequelize.lib").db;
const UserModel = db['UserModel'];

module.exports.createUser = async userData => await UserModel.create(userData);

module.exports.confirmUser = async userEmail => await UserModel.find({where: {email: userEmail}}).then(user=>user.update({isConfirmed: true}));