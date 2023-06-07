const express = require("express");
const cors = require('cors');
const app = express();

// config nodemon to run with vite hot reloads?

app.use(cors());
// this recognizes the incomming request as a json object
app.use(express.json());
// needed fo post and put routes to tell the server to accept the json given by the req body from the frontend form submission
app.use(express.urlencoded({ extended: true })); 

// requires configuration of mongoose set up to MongoDB
require('./db/mongoose.config');
// server requires the routes from dedicated customer route file
require('./routes/customers.routes')(app);

app.get("/", (request, response) => {
    response.send("Hi there");
});
// setting the port to listen to requests to match the front end port 
const port = 5173;
app.listen(port, () => {
    console.log(`Listen on the port ${port}...`);
});
