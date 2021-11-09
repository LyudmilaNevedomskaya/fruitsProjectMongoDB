// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const mongoose = require('mongoose');


// // Connection URL
// // const url = 'mongodb://localhost:27017';
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// // Database Name
// const dbName = 'fruits';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the Server
// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   insertDocuments(db, function () {
//     findDocuments(db, function () {
//       client.close();
//     });
//   });
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name field is require"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Nice fruit."
});

//fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Mila",
  age: 35
});

//person.save();

//ADDING SEVERAL DATA
const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "My favourite."
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 3,
  review: "Too sweet."
});

// Fruit.insertMany([orange, kiwi], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully added");
//   }
// })


//READ DATA//////////////////////
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// })

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

    ///////////CLOSING THE CONNECTION//////

    mongoose.connection.close();

    fruits.forEach(item => {
      console.log(item.name);
    })
  }
})







// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name: "Orange",
//       score: 5,
//       review: "Kinda sour"
//     },
//     {
//       name: "Banana",
//       score: 10,
//       review: "The greatest stuff"
//     }
//   ], function (err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount);
//     assert.equal(3, Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

// const findDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
