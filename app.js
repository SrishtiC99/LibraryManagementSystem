const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

const books = [
  {
    bookName: "Coolest Book Ever",
    bookAuthor: "Srishti Kumari",
    bookPages: 200,
    bookPrice: 250,
    bookState: "Available"
  },
  {
    bookName: "It Ends With Us",
    bookAuthor: "Colleen Hoover",
    bookPages: 384,
    bookPrice: 230,
    bookState: "Available"
  }
];

app.get("/", function(req, res){
  res.render("home", {bookData: books});
})

app.listen(3000, function(){
  console.log("server started on port 3000");
})
