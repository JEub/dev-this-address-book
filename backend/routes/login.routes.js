const LoginController = require('../controllers/login.controller');
const {authenticate} = require('../db/jwt.config');
module.exports = (app) => {
    // find one
    // protected route
    app.get("/api/login/findUser/:id", authenticate, LoginController.getUser); 
    // find all
    // protected route
    app.get("/api/login/findUsers/all", authenticate, LoginController.getAllUsers);
    // create 
    app.post("/api/login/registerUser", LoginController.registerUser);
    app.post("/api/login/loginUser", LoginController.loginUser);
}