const express = require("express");
const loginController = require("../controller/login");
const authorized = require("../auth/auth");

const router = express.Router();

router.get("/", loginController.login);
router.get("/login", loginController.login);
router.post("/login", loginController.loginPost);
router.get("/register", loginController.register);
router.post("/register", loginController.registerPost);
router.get("/dashboard", authorized.isAuthorized, loginController.dashboard);
router.get("/logout", loginController.logout);

module.exports = router;
