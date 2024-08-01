const mongoose = require("mongoose");
const { hash } = require("../middleware/hash");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        reqired: true,
        unique: true
    },
    password: {
        type: String,
        reqired: true
    }
})


userSchema.pre("save", async function () {
    this.password = await hash(this.password);
})




module.exports = mongoose.model("User", userSchema);