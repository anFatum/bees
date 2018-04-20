const Router = require("express-promise-router");
const authController = require("../Controllers/Authentification.Controller");
const authMiddle = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authController.confirmAuth);
router.post('/forgotPassword/', authController.forgotPassword);
router.post('/forgotPassword/confirm', authMiddle.jwtCheck, authController.changePassword);


module.exports = router;