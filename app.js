// Initial const-requires for npm

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

//set up server
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));




app.listen(3000, function(){
    console.log("server is up and running on localhost 3000");
});