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

let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8000;
  }
  console.log("Listening intently");
  app.listen(port);
