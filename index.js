const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")


const MONGO_URL = "mongodb://127.0.0.1:27017/demo";

main().then(() => {
    console.log("connected to db")
}).catch((err) => {
    console.log("err:" + err);
})


async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


app.use("/", loginRoute);
app.use("/", signupRoute);

app.get("/", (req, res) => {
    res.render("home.ejs")
})



app.listen(8080, () => console.log("server started!"))
