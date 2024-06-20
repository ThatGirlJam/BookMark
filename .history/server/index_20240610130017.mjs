//index.mjs
// Load environment variables
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use("/posts", posts);
// Load the /posts routes

//Adding a route, where we use Express app to listen for a
//get request at the path '/' which is root or homepage
app.get("/", (req, res) => {
  res.send("Hello from our server!"); //usually sends JSON object or array of data
});

//Used to start the server and listen for requests on a specific port
//Since React runs on 3000 by default, we use 8080 here
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
