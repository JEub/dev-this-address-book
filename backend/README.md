# Backend

## Tech Stack

- Node.JS
- Express
- MongoDB


## Routes

- /customers - GET, POST
- /customers/{customer_id} - GET, PUT, DELETE


## Customer Data Model


- _id - string
- first_name - string
- last_name - string
- street_address - string
- street_address_two - string
- city - string
- state - string

> Note: Open to moving all address information into 1 string field and parsing it to return specific data - Zeke