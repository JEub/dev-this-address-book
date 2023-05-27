const LoginController = require('../controllers/login.controller');
module.exports = (app) => {
    // find one
    app.get("/api/login/findOneUser", LoginController.getUser); 
    // find all
    app.get("/api/login/findAllUsers", LoginController.getAllUsers);
    // create 
    app.post("/api/login/createUser", LoginController.createCustomer);
}