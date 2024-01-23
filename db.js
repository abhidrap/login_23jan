const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code here, if any, that relies on the successful connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error, such as logging, notifying, or shutting down the application
  });
//definig a schema 
const user_schema = new mongoose.Schema({
    user:String,
    password:String
});
module.exports = mongoose.model("modelname", user_schema);

