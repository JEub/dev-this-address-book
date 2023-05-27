// requiring mongoose to bridge a connection from backend to MongoDB
const mongoose = require('mongoose');
// Mongoose requires a MongoDB connection. This db is stored locally at the included url. 
mongoose.connect("mongodb://localhost/parksnrec", { 
    // default recommended options for Mongoose connection
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    // success message
    .then(() => console.log("Here be pirates!"))
    // failure message
    .catch(err => console.log("There are no pirates here.", err));