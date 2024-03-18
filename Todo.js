//------------Express se instance leke server intiate karke diya
const express = require("express");
const app = express();
//load config from env file
//-------------Process object se port number nikala---------------
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
//--------------Yeh important parse karne liye-------------
app.use(express.json());

//Import Routes from todo api
//---------------Import kiya h todo routes ko-----------
const todoRoutes = require("../Backend_Todo/routes/Todo");

//mount api
//--------------isne mount kiya url ko------------------
app.use("/api/v1", todoRoutes);

//Start Server
//---------------Server Start Kar Diya--------------
app.listen(PORT, () => {
  console.log(`Server Started at Portnpm ${PORT}`);
});

//Connecting Database
//----------------Database connection---------------
const dbConnect = require("./config/database");
dbConnect();

//default Route
//-----------------It is compulsory to run ----------------
app.get("/", (req, res) => {
  res.send(`<h1>This is Your HomePage</h1>`);
});
