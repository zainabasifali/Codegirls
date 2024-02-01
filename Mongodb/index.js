// Connecting 
// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri = "mongodb+srv://Zainab:zainab.asif21@atlascluster.tj9dd6j.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// }
// );
// async function run() {
//     try {
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);


// Create document
// const myDB = client.db("Student_Data");
// const myColl = myDB.collection("Student");

// try {
//     const doc = [{ "_id": 1, name: "Roohi", email: "roohiali@gmail.com", age: 25 }, { "_id":2, name: "Mehreen", email: "mehreenyasir@gmail.com", age: 30 }, { "_id": 3, name: "Zainab Asif", email: "zainabasif@gmail.com", age: 19 }, { "_id":4 , name: "Sabika", email: "sabikazehra@gmail.com", age: 28 }, { "_id": 5, name: "Hafsa", email: "hafsaali@gmail.com", age: 18 }, { "_id": 6, name: "Anum Ghulam", email: "anumzehra@gmail.com", age: 35 }];

//     const insertManyresult = await myColl.insertMany(doc);
//     let ids = insertManyresult.insertedIds;

//     console.log(`${insertManyresult.insertedCount} documents were inserted.`);
//     for (let id of Object.values(ids)) {
//         console.log(`Inserted a document with id ${id}`);
//     }
// } catch (e) {
//     console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
//     let ids = e.result.result.insertedIds;
//     for (let id of Object.values(ids)) {
//         console.log(`Processed a document with id ${id._id}`);
//     }
//     console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
// }


//Delete Document
// const myDB = client.db("Student_Data");
// const myColl = myDB.collection("Student");
// const doc = {
//     age: {
//       $lt: 19,
//     }
//   };

// const deleteResult = await myColl.deleteOne(doc);
// console.dir(deleteResult.deletedCount);


//Update Document
// const myDB = client.db("Student_Data");
// const myColl = myDB.collection("Student");
// const filter = { _id: 2 };
// const updateDocument = {
//     $set: {
//        age: 24,
//     },
//  };
//  const result = await myColl.updateOne(filter, updateDocument);


// Read document
// const myDB = client.db("Student_Data");
// const myColl = myDB.collection("Student");
// const findResult = myColl.find({
//     age: {
//       $gt: 19,
//     },
//   });
// for await (const doc of findResult) {
//     console.log(doc);
//   }
