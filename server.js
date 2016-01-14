var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// set port
app.set('port', (process.env.PORT || 3005));

// set static path
app.use(express.static(path.join(__dirname, "dist")));

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// start server
app.listen(app.get('port'), function(){
  console.log("Server running on port " + app.get("port") + "...");
});