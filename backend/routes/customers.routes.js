const CustomersController = require('../controllers/customers.controller');
const {authenticate} = require('../db/jwt.config');
module.exports = (app) => {
    // create 
    app.post("/api/customers/createCustomer", authenticate, CustomersController.createCustomer);

    // find one
    app.get("/api/customers/findCustomer/:id", authenticate, CustomersController.getCustomer); 
    // find all
    app.get("/api/customers/findCustomers/all", authenticate, CustomersController.getAllCustomers);
    
    // edit
    app.put("/api/customers/editCustomer/:id", authenticate, CustomersController.updateCustomer);

    // delete
    app.delete("/api/customers/deleteCustomer/:id", authenticate, CustomersController.deleteCustomer);
}