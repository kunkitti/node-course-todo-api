//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('ConnectTo MongoDB Server');
    const db = client.db('TodoApp')


    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable ti Insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    //     db.collection('Users').insertOne ({
    //         name: 'Bank',
    //         age: 25,
    //         location: 'Bangkok'
    //     }, (err, result) => {
    //         if (err) {
    //             return console.log('Unable to insert user', err);
    //         }
    //         console.log(result.ops);
    //     },
    // )


    // client.close();
    
});