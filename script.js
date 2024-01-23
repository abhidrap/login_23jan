const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const user_info = require("./db.js");
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/data", async(req, res)=>{
    console.log(req.body);
    const{user, password} = req.body;
    const newuser = new user_info({user, password});
    const saveduser = await newuser.save();
    console.log("saved user", saveduser);
    res.status(201).json(saveduser);
    
});
app.get('/',(req,res)=>{
    res.render("index");
});

app.listen(port, ()=>{
    console.log("server started");
});