

const { signToken } = require("../middleware/JWT");
const User = require("../model/user");

const signupController = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        const result = await new User({ name, email, password }).save();
        const token = signToken({ email, id: result._id, name });

        res.cookie("token", token).render("user.ejs", { name })
    } catch (e) {
        console.log("signup err:" + e)
    }
}

module.exports = { signupController }