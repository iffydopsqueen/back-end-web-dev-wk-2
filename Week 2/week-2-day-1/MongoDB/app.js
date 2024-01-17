const { MongoClient } = require('mongodb');

// Create an instance of MongoClient for mongodb
// "nodemongo" is the database name
// const client = new MongoClient('mongodb://localhost:27017/nodemongo');
const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo');

// Connect to database
client.connect()
    .then(() => {
        // Database Connection

        // console.log('Connected Successfully & Database Created!');
        // Close the database connection
        // client.close();

        // Adding a collection named "customers" to the DB

        var dbo = client.db('nodemongo');
        /*dbo.createCollection('customers').then(function() {
            console.log('Collection created!');
            // Close the database connection
            client.close();
        })*/

        // Insert a single record into the "customers" collection in the DB

        /*var cusData = { name: 'Westcliff', address: 'Irvine, CA'};
        dbo.collection('customers').insertOne(cusData)
            .then(function() {
                console.log('1 document inserted');
                client.close();
            })*/

        // Insert multiple records into the "customers" collection in the DB

        /*var cusData = [
            { name: 'John', address: 'Highway 71'},
            { name: 'Peter', address: 'Lowstreet 4'},
            { name: 'Amy', address: 'Apple st 652'},
            { name: 'Hannah', address: 'Mountain 21'},
            { name: 'Michael', address: 'Valley 345'},
            { name: 'Sandy', address: 'Ocean blvd 2'},
            { name: 'Betty', address: 'Green Grass 1'},
            { name: 'Richard', address: 'Sky st 331'},
            { name: 'Susan', address: 'One way 98'},
            { name: 'Vicky', address: 'Yellow Garden 2'},
            { name: 'Ben', address: 'Park Lane 38'},
            { name: 'William', address: 'Central st 954'},
            { name: 'Chuck', address: 'Main Road 989'},
            { name: 'Viola', address: 'Sideway 1633'}
        ];
        dbo.collection('customers').insertMany(cusData)
            .then(function(res) {
                console.log('Number of documents inserted: ' + res.insertedCount);
                client.close();
            })*/

        // Select a record from the "customers" collection in the DB using the findOne() method

        /*dbo.collection('customers').findOne({})
            .then(function(res) {
                console.log(res.name);
                client.close();
            })*/

        // Find a document in the "customers" collection in the DB using the "query" object to filter 

        /*var query = { address: 'Park Lane 38' }
        dbo.collection('customers').find(query)
            .toArray()
            .then(items => {
                console.log(`Successfully found ${items.length} documents.`)
                console.log(items);
                client.close();
            })*/

        // Sort the result in ascending or descending order using the sort() method

        /*var mysort = { name: 1 }
        dbo.collection('customers').find()
            .sort(mysort)
            .toArray()
            .then(items => {
                console.log(`Successfully sorted ${items.length} documents.`);
                console.log(items);
                client.close();
            })*/

        // Delete a record, or document from the "customers" collection in the DB using the deleteOne() method

        /*var myquery = { address: 'Mountain 21' };
        dbo.collection('customers').deleteOne(myquery)
            .then(function() {
                console.log('1 document deleted!');
                client.close();
            })*/

        // Update a record, or document from the "customers" collection in the DB using the updateOne() method

        var myquery = { address: 'Valley 345' };
        var newvalues = { $set: { name: 'Mickey', address: 'Canyon 123' }};
        dbo.collection('customers').updateOne(myquery, newvalues)
            .then(function() {
                console.log('1 document updated!');
                client.close();
            })
        
    })
    .catch(error => console.log('Failed to connect', error));