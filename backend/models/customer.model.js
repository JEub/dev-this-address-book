// create a customer model as required by mongoose to manipulate data going into the database
const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required:[true,'Please enter a correct firstname!'],
        minLength:[3,"Error: First name must be longer than three letters."]
    },
    lastName: { 
        type: String,
        required:[true,'Please enter a correct lastname!'],
        minLength:[3,"Error: Last Name must be longer than three letters."]
    },
    street1: { 
        type: String,
        required:[true,'Please enter a street address!'],
        minLength:[3,"Error: street name must be longer than three letters."]
    },
    street2: { 
        type: String,
        required:[false,'Street 2 error!'],
        minLength:[3,"Error: street 2 name must be longer than three letters."]
    },
    city: { 
        type: String,
        required:[true,'Please enter city!'],
        minLength:[3,"Error: city Name must be longer than three letters."]
    },
    state: { 
        type: String,
        required:[true,'Please enter a state!'],
        minLength:[2,"Error: state Name must be longer than two letters."]
    }
}, { timestamps: true })
module.exports = mongoose.model('Customer', CustomerSchema);