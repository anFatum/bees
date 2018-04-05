const userService = require("../Services/User.Service");


module.exports.createUser = async (req, res, next) => {

    const {email} = req.body;

    console.log(email);
    console.log(req.body);

    const user = await userService.createUser(req.body);

    console.log(user);

    res.json({
        message: "OK"
    })
};

module.exports.getUsers = async (req, res, next) => {
    const users = await userService.getUsers();
    res.json(users);
};