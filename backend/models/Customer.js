// create a customer model as required by mongoose to manipulate data going into the database
const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required:[true,'Please enter a correct username!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    lastName: { 
        type: String,
        required:[true,'Please enter a correct password format!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    street1: { 
        type: String,
        required:[true,'Please enter a street address!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    street2: { 
        type: String,
        required:[false,'Street 2 error!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    city: { 
        type: String,
        required:[true,'Please enter city!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    },
    state: { 
        type: String,
        required:[true,'Please enter a state!'],
        minLength:[3,"Error: Name must be longer than three letters."]
    }
}, { timestamps: true })
module.exports = mongoose.model('Login', LoginSchema);