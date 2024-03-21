const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controller/userController");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(currentUser);

module.exports = router;
