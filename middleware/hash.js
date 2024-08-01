const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = async function (userPassword) {
    return bcrypt.hash(userPassword, saltRounds);
};

const compare = async function (password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
};

module.exports = { hash, compare };
