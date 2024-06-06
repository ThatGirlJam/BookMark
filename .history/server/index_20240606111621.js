//index.js
const express = require("express");
const app = express();

//Adding a route, where we use Express app to listen for a
//get request at the path '/' which is root/homepage
app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

//Used to start the server and listen for requests on a specific port
//Since React runs on 3000 by default, we use 8080 here
app.listen(8080, () => {
  console.log("server listening on port 8080");
});
