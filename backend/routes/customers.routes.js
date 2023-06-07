const CustomersController = require('../controllers/customers.controller');
module.exports = (app) => {
    // create 
    app.post("/api/customers/createCustomer", CustomersController.createCustomer);

    // find one
    app.get("/api/customers/findCustomer/:id", CustomersController.getCustomer); 
    // find all
    app.get("/api/customers/findCustomers/all", CustomersController.getAllCustomers);
    
    // edit
    app.put("/api/customers/editCustomer/:id", CustomersController.updateCustomer);

    // delete
    app.delete("/api/customers/deleteCustomer/:id", CustomersController.deleteCustomer);
}