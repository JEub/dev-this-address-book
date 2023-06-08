// create a model for a login user separate from the customers in the database
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const LoginSchema = new mongoose.Schema({
    userName: { 
        type: String,
        required:[true,'Username is required!'],
        minLength:[3,"Username must be longer."]
    },
    password: { 
        type: String,
        required:[true,'Password is required!'],
        minLength:[3,"Password must be longer."]
    }
}, { timestamps: true });
// using mongoose virtual method here allows creation for confirm password that is not stored in database
LoginSchema.virtual('confirmPassword')
        .get(() => this._confirmPassword)
        .set(value => this._confirmPassword = value);
// using mongoose pre hook here allows us to validate confirmPassword and password before validations are run.
LoginSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    // this next is a mongoose function to call the next middleware or the next function to run in this case validations run next
    next();
});
LoginSchema.pre('save', function(next) {
    // 10 is the # of salt rounds bcrypt will use when generating a salt
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});
module.exports = mongoose.model('Login', LoginSchema);