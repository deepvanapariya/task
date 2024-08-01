const jwt = require("jsonwebtoken");
const secretKey = "howaboutme";

class JwtUtils {
    static signToken = (payload) => {
        const expiresIn = 600000;
        const token = jwt.sign(payload, secretKey, { expiresIn });
        return token;
    };

    static verifyToken = (token) => {
        try {
            return jwt.verify(token, secretKey);
        } catch (err) {
            console.log("token verify err:", err)
        }
    };
}

module.exports = JwtUtils;
