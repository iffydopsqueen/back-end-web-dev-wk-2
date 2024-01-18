const { MongoClient } = require('mongodb');

// Create an instance of MongoClient for mongodb
// "statsdb" is the database name
const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb');

// Connect to the newly created database
client.connect()
    .then(() => {
        // TASK 1 
        /* console.log('Database created successfully!');
        console.log('Connection successful');*/

        // Close the database connection when done
        // client.close();

        // TASK 2
        /*var dbo = client.db('statsdb');
        dbo.createCollection('uscensus')
            .then(function() {
                console.log('Collection is created!');
                client.close();
            })*/

        // TASK 3
        /*var stats = [
            {
                city: 'San Juan', 
                zip: '00926', 
                state: 'PR', 
                income: '34781',
                age: '44'
            },
            {
                city: 'Corona', 
                zip: '11368', 
                state: 'NY', 
                income: '50797',
                age: '32'
            },
            {
                city: 'Chicago', 
                zip: '60629', 
                state: 'IL', 
                income: '42019',
                age: '31'
            },
            {
                city: 'El Paso', 
                zip: '79936', 
                state: 'TX', 
                income: '54692',
                age: '31'
            },
            {
                city: 'Los Angeles', 
                zip: '90011', 
                state: 'CA', 
                income: '36954',
                age: '28'
            },
            {
                city: 'Norwalk', 
                zip: '90650', 
                state: 'CA', 
                income: '66453',
                age: '35'
            }
        ];
        var dbo = client.db('statsdb');
        dbo.collection('uscensus').insertMany(stats)
            .then(function(res) {
                console.log(`Successfully inserted ${res.insertedCount} documents!`);
                client.close();
            })*/    
            
        // TASK 4
        /*var stats = [
            {
                city: 'Pacoima', 
                zip: '91331', 
                state: 'CA', 
                income: '60360',
                age: '33'
            },
            {
                city: 'Ketchikan', 
                zip: '99950', 
                state: 'AK', 
                income: '00000',
                age: '00'
            }
        ];
        var dbo = client.db('statsdb');
        dbo.collection('uscensus').insertMany(stats)
            .then(function(res) {
                console.log(`Successfully inserted ${res.insertedCount} more documents!`);
                client.close();
            })*/

        // TASK 5
        /*var dbo = client.db('statsdb');
        var query = { city: 'Corona', state: 'NY' };
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                if (items.length > 0) {
                    console.log(`Successfully found ${items.length} documents.`);
                    console.log(`Zip code for Corona, NY is ${items[0].zip}`);
                } else {
                    console.log('No matching document found.');
                }
                client.close();
            })
            .catch(error => console.log('Error fetching data:', error));*/
        
        // TASK 6
        /*var dbo = client.db('statsdb');
        var query = { state: 'CA' };
        dbo.collection('uscensus').find(query)
            .toArray()
            .then(items => {
                if (items.length > 0) {
                    console.log(`Successfully found ${items.length} documents.`);
                    console.log();
                    items.forEach(item => console.log(`The income for "${item.city}" is ${item.income}.`));
                    // items.forEach(item => console.log(item));
                } else {
                    console.log('No matching document found.');
                }
                client.close();
            })
            .catch(error => console.log('Error fetching data:', error));*/
        
        // TASK 7
        var dbo = client.db('statsdb');
        var myquery = { state: 'AK' };
        var newvalues = { $set: { income: '38910', age: '46' }};
        dbo.collection('uscensus').updateOne(myquery, newvalues)
            .then(function() {
                console.log('A document has been updated!');
                client.close();
            })

    })
    .catch(error => console.log('Database failed to connect!', error));








