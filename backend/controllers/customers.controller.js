const Customer = require('../models/customer.model');    
module.exports.customerIndex = (request, response) => {
    response.json({
        message: "Hello Customers"
    });
}
module.exports.createCustomer = (request, response) => {
    const {userInfo} = request.body;
    // const {customerInfo} = 
    Customer.create(userInfo)
        .then((customer) => {
            response.status(201).json(customer)
            if(response.status(201)){
                console.log("customer created" + customer);
            };
            }
        )
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
            console.log(request.data);
        })
};

module.exports.getAllCustomers = (request, response) => {
    Customer.find({})
        .then((customers) => {
            response.status(200).json(customers);
            console.log(customers); 
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err);
            console.log(request.data);
        })
}
module.exports.getCustomer = (request, response) => {
    Customer.findOne({_id:request.params.id})
        .then((customer) => {
            response.status(200).json(customer);
            console.log(customer);
            // response.json(customer);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err)
            console.log(request.data);
        });
}
module.exports.updateCustomer = (request, response) => {
    Customer.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then((updated) => {
            response.status(204).json(updated)
            console.log("Update Success" + updated);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err)
            console.log(request.data);
        })
}
module.exports.deleteCustomer = (request, response) => {
    Customer.deleteOne({ _id: request.params.id }) 
        .then((deleteConfirmation) => {
            response.status(204).json(deleteConfirmation)
            console.log("Delete Success");
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err)
            console.log(request.data);
        })
}