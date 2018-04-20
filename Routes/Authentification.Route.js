const Router = require("express-promise-router");
const authController = require("../Controllers/Authentification.Controller");

const router = Router();

router.post("/", authController.confirmAuth);
router.post('/forgotPassword/', authController.forgotPassword);
router.post('/forgotPassword/confirm', authController.changePassword);


module.exports = router;