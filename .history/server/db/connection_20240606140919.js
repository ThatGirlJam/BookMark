import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("sample_training");
export default db;

// //connection.js
// const { MongoClient } = require("mongodb");

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const uri =
//     "mongodb+srv://jaimengjm:coEWUkbMq1G7P8Yi@bookmark.96x0tlx.mongodb.net/?retryWrites=true&w=majority&appName=BookMark";
//   const client = new MongoClient(uri); //create an instance of MongoClient

//   try {
//     await client.connect();

//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close(); //make sure close connection to cluster
//   }
// }

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// main().catch(console.error);
