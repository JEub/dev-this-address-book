const LoginUser = require('../models/login.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createLogin = (request, response) => {
    LoginUser.create(request.body) 
        .then((pirate) => response.status(200).json(pirate))
        .catch((err) => response.status(400).json(err));
}
// module.exports.deleteLogin = (request, response) => {
//     LoginUser.deleteOne({ _id: request.params.id }) 
//         .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
//         .catch(err => response.status(400).json(err))
// }