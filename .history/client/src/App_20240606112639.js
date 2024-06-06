//App.js

import axios from "axios"; //used to make requests
import "./App.css";

//data will be the string we send from our server
const apiCall = () => {
  axios.get("http://localhost:8080").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};
