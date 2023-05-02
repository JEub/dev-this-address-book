const { MongoClient } = require('mongodb');

const url = "";
const dbName = "parks_and_rec";
const collectionName = "customers";


const client = new MongoClient(url).db(dbName).collection(collectionName);


const getCustomers = async (count, sort_desc) => {
    const customers = []
    try {
        const query = {};
        const options = {
            sort: { "_id" : sort_desc ? -1 : 1 }

        }

        const cursor = client.find(query, options);

        if ((await client.countDocuments(query)) === 0) {
            console.log("No documents found!");
            return customers;
        }

        while (await cursor.hasNext() && customers.length != count) {
            customers.push(await cursor.next());
        }
        console.log("Found %d customers", customers.length);
    } catch (e) {
        console.log("Failed to find customers because of %d", e);
    } finally {
        return customers;
    }
}

const getCustomer = async customerId => {
    let result;
    try {
        console.log("Finding customer: %d", customerId);
        result = await client.findOne({ _id: customerId }); 
        console.log("Success finding customer: %d", customerId);
    } catch (e) {
        console.log("Failed to find customer: %d because of %d", customerId, e);
    } finally {
        return result != null ? result : {};
    }
}

const createCustomer = async customer => {
    let result;
    try {
        console.log("Creating customer: %d", customer);
        result = await client.insertOne(customer);
        console.log("Success creating customer: %d", result._id);
    } catch (e) {
        console.log("Failed to create customer: %d because of %d", customer, e);
    } finally {
        
        return result != null ? result : {};
    }
}

const updateCustomer = async (customerId, update) => {
    let result;
    try {
        console.log("Updating customerId: %d to customer: %d", customerId, update);
        result = await client.updateOne({ _id: customerId }, update, { upsert: true }); 
        console.log(`${result.matchedCount} document(s) found, ${result.modifiedCount} updated, ${result.upsertedCount} upserted`);
    } catch (e) {
        console.log("Failed to update customer: %d because of %d", customerId, e);
    } finally {
        return result != null && (result.modifiedCount === 1 || result.upsertedCount === 1);
    }
}

const deleteCustomer = async customerId => {
    let result;
    try {
        console.log("Deleting customer: %d", customerId);
        result = await client.deleteOne({ _id: customerId });
        console.log("Success deleting customer: %d", customerId);
    } catch (e) {
        console.log("Failed to delete customer: %d because of %d", customerId, e);
    } finally {
        return result != null && result.deletedCount === 1;
    }
}