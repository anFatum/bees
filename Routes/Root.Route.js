const Router = require("express-promise-router");
const rootController = require("../Controllers/Root.Controller");

const router = Router();

router.get("/", rootController.getRoot);

module.exports = router;