const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/UserController");

router.post("/signup", usersCtrl.signup);
router.get("/userfind", usersCtrl.find);
// router.post("/login", usersCtrl.login)
router.post("/get", usersCtrl.test);

module.exports = router;
