const { compare } = require("../middleware/hash");
const { signToken } = require("../middleware/JWT");
const User = require("../model/user");

const loginController = async (req, res, _next) => {

    try {
        let { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && await compare(password, user.password)) {

            let token = signToken({ email, id: user._id, name: user.name })

            res.cookie("token", token).redirect("/loggedin")
        }

        if (user) {
            res.send("wrong password")
        }

        else {
            res.send("User not found!")
        }

    }
    catch (e) {
        console.log("login err:" + e)
    }
}

module.exports = { loginController }