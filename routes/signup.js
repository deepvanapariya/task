const express = require("express");
const { signupController } = require("../controller/signup");
const router = express.Router();

router.route("/signup")
    .get((req, res) => {
        res.render("signup.ejs")
    })
    .post(signupController)

module.exports = router; 