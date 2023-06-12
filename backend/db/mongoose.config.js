// requiring mongoose to bridge a connection from backend to MongoDB
const mongoose = require('mongoose');
// Mongoose requires a MongoDB connection. Connection string comes form MongoDB GUI Compass.
mongoose.connect("mongodb+srv://Eric_Trudell:okndyzeRiMIblMA0@cluster0.ha2bmiq.mongodb.net/", { 
    // default recommended options for Mongoose connection
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    // success message
    .then(() => console.log("Connected to mongoDB!"))
    // failure message
    .catch(err => console.log("Check MongoDB connection.", err));