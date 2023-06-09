const LoginController = require('../controllers/login.controller');
module.exports = (app) => {
    // find one
    app.get("/api/login/findUser/:id", LoginController.getUser); 
    // find all
    app.get("/api/login/findUsers/all", LoginController.getAllUsers);
    // create 
    app.post("/api/login/registerUser", LoginController.registerUser);
    app.post("/api/login/loginUser", LoginController.loginUser);

}