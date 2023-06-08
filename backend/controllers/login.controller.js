const LoginUser = require('../models/login.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createLogin = (request, response) => {
    LoginUser.create(request.body) 
        .then((user) => {
            response.status(201).json(user)
            console.log("login created" + user);
            // brcyot password here
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
            console.log(request.data);
        });
}
module.exports.getAllUsers = (request, response) => {
    LoginUser.find({})
        .then((user) => {
            console.log(user); 
            response.status(200).json(user);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err);
            console.log(request.data);
        })
}
module.exports.getUser = (request, response) => {
    LoginUser.findOne({_id:request.params.id})
        .then((user) => {
            response.status(200).json(user);
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err)
            console.log(request.data);
        });
}