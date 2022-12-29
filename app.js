const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home", {msg: "Hello I'm Srishti!!"});
})

app.listen(3000, function(){
  console.log("server started on port 3000");
})
