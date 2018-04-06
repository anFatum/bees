const Router = require("express-promise-router");
const registerController = require("../Controllers/Register.Controller");

const router = Router();

router.post("/", registerController.createUser);

module.exports = router;