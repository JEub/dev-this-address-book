const LoginUser = require('../models/login.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createLogin = (request, response) => {
    LoginUser.create(request.body) 
        .then((user) => response.status(200).json(user))
        .catch((err) => response.status(400).json(err));
}
module.exports.getAllUsers = (request, response) => {
    LoginUser.find({})
        .then((user) => {
            console.log(user); 
            response.json(user);
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
        })
}
module.exports.getUser = (request, response) => {
    LoginUser.findOne({_id:request.params.id})
        .then((user) => response.status(200).json(user))
        .catch(err => response.status(400).json(err));
}
// module.exports.deleteLogin = (request, response) => {
//     LoginUser.deleteOne({ _id: request.params.id }) 
//         .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
//         .catch(err => response.status(400).json(err))
// }