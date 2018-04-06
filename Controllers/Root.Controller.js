const userService = require("../Services/User.Service");

module.exports.getRoot = (req, res, next) => {
    res.json({
        message:"OK"
    })
};

module.exports.deleteUsers = (req,res,next) =>{
    userService.deleteUsers();
    res.json({
        message:"deleted"
    })
};