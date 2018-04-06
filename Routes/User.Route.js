const Router = require("express-promise-router");
const userController = require("../Controllers/User.Controller");

const router = Router();

router.get("/", userController.getUsers);

module.exports = router;