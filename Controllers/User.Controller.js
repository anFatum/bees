const userService = require("../Services/User.Service");
const authService = require("../Services/Authentification.Service");
const HttpError = require("../error");


module.exports.getUsers = async (req, res, next) => {
    const users = await userService.getUsers();
    res.json(users);
};

module.exports.changePassword = async (req,res,next) => {
    const user = await authService.findEmailUser(req.body.email) ? await authService.findEmailUser(req.body.email) : await authService.findLoginUser(req.body.login);
    if (user && user.isConfirmed){
        if(authService.changePassword(user.id, req.body.password))
            res.json({
                message:"Changed password"
            });
        else HttpError(426, 'Password is not valid');
    } else throw new HttpError(404, 'User not found');
};