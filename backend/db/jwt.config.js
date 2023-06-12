const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    // checking the "usertoken" cookie inside of the "cookies" object of the request against the secret key that was used when signing the object
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        // callback function receives any errors and the payload of the cookie
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            next();
        }
});
}