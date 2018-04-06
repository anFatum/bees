const Router = require("express-promise-router");
const authController = require("../Controllers/Authentification.Controller");

const router = Router();

router.post("/", authController.confirmAuth);

module.exports = router;