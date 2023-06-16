const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
// secret key file
require('dotenv').config();
// requires configuration of mongoose set up to MongoDB
require('./db/mongoose.config');
// server requires the routes from dedicated customer route file
const app = express();
app.use(cors());

app.use(cookieParser());
// this recognizes the incomming request as a json object
app.use(express.json());
// needed fo post and put routes to tell the server to accept the json given by the req body from the frontend form submission
app.use(express.urlencoded({ extended: true })); 
require('./routes/customers.routes')(app);
// app.get("/", (request, response) => {
//     response.send("Hi there");
// });
// setting the port to listen to requests to match the front end port 
const port = process.env.PORT || 5172;
app.listen(port, () => {
	console.log(`Listen on the port ${port}...`);
});
