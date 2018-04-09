const userService = require("../Services/User.Service");


module.exports.getUsers = async (req, res, next) => {
    const users = await userService.getUsers();
    res.json(users);
};