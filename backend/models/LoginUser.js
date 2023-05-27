// create a model for a login user separate from the customers in the database
const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required:[true,'Please enter a correct username!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    password: { 
        type: String,
        required:[true,'Please enter a correct password format!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    }
}, { timestamps: true })
module.exports = mongoose.model('Login', LoginSchema);