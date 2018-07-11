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

    //// findoneandupdate
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b448b19b871e532c4c44775')
    }, {
        $set: {
          text : 'ALOHA'
        }
        
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });;


    // client.close();
    
});