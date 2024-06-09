const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://jaimengjm:coEWUkbMq1G7P8Yi@bookmark.96x0tlx.mongodb.net/?retryWrites=true&w=majority&appName=BookMark";
  const client = new MongoClient(uri); //create an instance of MongoClient

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  }
}
