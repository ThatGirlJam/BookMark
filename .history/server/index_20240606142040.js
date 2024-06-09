//index.js
// Load environment variables
require("dotenv").config();
console.log(process.env.ATLAS_URI);
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//Adding a route, where we use Express app to listen for a
//get request at the path '/' which is root or homepage
app.get("/", (req, res) => {
  res.send("Hello from our server!"); //usually sends JSON object or array of data
});

//Used to start the server and listen for requests on a specific port
//Since React runs on 3000 by default, we use 8080 here
app.listen(8080, () => {
  console.log("server listening on port 8080");
});
