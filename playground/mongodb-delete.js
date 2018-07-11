const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('Connected To MongoDB Server');
    const db = client.db('TodoApp');

    //deletemany


//    db.collection('Todos').deleteMany({text: 'hoooo'}).then((result) => {
//        console.log(result);
//    }).catch((err) => {
//        console.log(err);
//    });



    //deleteone

    // db.collection('Todos').deleteOne({text: 'hoooo'}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });



    //findOneanddelete

    // db.collection('Todos').findOneAndDelete({text: 'hoooo'}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    // db.collection('Users').deleteMany({name: 'Bank'}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    db.collection('Users').deleteMany({location: 'EUROB'}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

   // client.close();
});