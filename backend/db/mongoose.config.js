const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/parksnrec", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Here be pirates!"))
    .catch(err => console.log("There are no pirates here.", err));