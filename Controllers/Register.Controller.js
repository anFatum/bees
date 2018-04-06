const registerService = require("../Services/Register.Service");
const crypto = require("crypto");
crypto.DEFAULT_ENCODING = 'hex';

module.exports.createUser = async (req, res, next) => {

    const {password} = req.body;

    const salt = crypto.randomBytes(16)
        .toString("hex");
    const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');

    const new_user = {
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        passHash: key,
        passSalt: salt,
        isConfirmed: false,
        isActive: true,
        age: req.body.age,
        surname: req.body.surname,
        phone: req.body.phone
    };

    const user = await registerService.createUser(new_user);

    res.json({
        message: "OK"
    })
};