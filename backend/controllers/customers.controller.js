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
            if(response.status(200)){
                console.log(customer);
            }
            // console.log(response.status(200).json(customer));
            response.status(200).json(customer)
            console.log("customer created");
            }
        )
        .catch((err) => {
            response.status(400).json(err);
            console.log(request.data);
        })
};

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