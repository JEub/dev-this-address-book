const Customer = require('../models/customers.model');    
module.exports.customerIndex = (request, response) => {
    response.json({
        message: "Hello Customers"
    });
}
module.exports.createCustomer = (request, response) => {
    Customer.create(request.body) 
        .then((customer) => response.status(200).json(customer))
        .catch((err) => response.status(400).json(err));
}
module.exports.getAllCustomers = (request, response) => {
    Customer.find({})
        .then((customer) => {
            console.log(customer); 
            response.json(customer);
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
        })
}
module.exports.getCustomer = (request, response) => {
    Customer.findOne({_id:request.params.id})
        .then((customer) => response.status(200).json(customer))
        .catch(err => response.status(400).json(err));
}
module.exports.updateCustomer = (request, response) => {
    Customer.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then((updated) => response.status(200).json(updated))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteCustomer = (request, response) => {
    Customer.deleteOne({ _id: request.params.id }) 
        .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}