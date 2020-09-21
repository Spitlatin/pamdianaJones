const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const jquery = require("jquery");
const app = express();
var engines = require('consolidate');

// app.use(express.static('public'));

app.set('/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
res.render("index");
});


app.listen(3000, function(){
    console.log("app running on 3000");
});