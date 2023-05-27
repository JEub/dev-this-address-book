const CustomersController = require('../controllers/customers.controller');
module.exports = (app) => {
    // find one
    app.get("/api/customers/findOneCustomer", CustomersController.getCustomer); 
    // find all
    app.get("/api/customers/findAllCustomers", CustomersController.getAllCustomers);
    // create 
    app.post("/api/customers/createCustomer", CustomersController.createCustomer);
    // edit
    app.put("/api/customers/editCustomer/:id", CustomersController.updateCustomer);
    // delete
    app.delete("/api/customers/deleteCustomer/:id", CustomersController.deleteCustomer);
}