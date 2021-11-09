// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const mongoose = require('mongoose');


// // Connection URL
// const url = 'mongodb://localhost:27017';
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
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Nice fruit."
});

fruit.save();


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
