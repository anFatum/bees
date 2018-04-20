const db = require("../Libs/sequelize.lib").db;
const UserModel = db['UserModel'];
const userService = require("./User.Service");

module.exports.findEmailUser = async userEmail => await UserModel.findOne({where: {email: userEmail}});

module.exports.findLoginUser = async userLogin => await UserModel.findOne({where: {login: userLogin}});

module.exports.changePassword = async (id, newPass) => {
    const user = await UserModel.findOne({where: {id: id}});
    const passwordFacilities = userService.hashPassword(newPass);
    return await user.update({passHash: passwordFacilities.key, passSalt: passwordFacilities.salt});
};