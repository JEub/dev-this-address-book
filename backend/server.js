const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hi there");
});

// create 
app.post("/createCustomer", (request, response) => {
    response.send("Creating customer");
});
// edit
app.put(`/editCustomer/${_id}`, (request, response) => {
    response.send("Updating customer");
});
// delete
app.delete(`/deleteCustomer/${_id}`, (request, response) => {
    response.send("Updating customer");
});
// find one
app.get("/findOneCustomer", (request, response) => {
    response.send("Finding a single customer");
}); 
// find all
app.get("/findAllCustomers", (request, response) => {
    response.send("Finding all customers");
});


app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});
