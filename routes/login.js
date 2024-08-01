const express = require("express");
const { loginController } = require("../controller/login");
const { verify } = require("jsonwebtoken");
const { verifyToken } = require("../middleware/JWT");
const router = express.Router();

router.route("/login")
    .get((req, res) => {
        res.render("login.ejs")
    })
    .post(loginController)

router.get("/loggedin", async (req, res) => {
    const token = req?.cookies?.token;
    console.log("token:", token)
    const user = verifyToken(token);
    res.render("user.ejs", { name: user.name })

})


router.post("/logout", async (req, res) => {
    res.clearCookie("token").redirect("/login")
})

module.exports = router; 