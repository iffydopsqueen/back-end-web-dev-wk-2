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
        var stats = [
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
            })        

    })
    .catch(error => console.log('Database failed to connect!', error));








