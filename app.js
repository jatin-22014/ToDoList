const express = require("express");
const app = express();
const bodyParser = require("body-parser");


var items = ["Eat", "Sleep", "Beat the Meat" , "Repeat"];


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDate();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };


  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    daytype: day,
    newListItems: items
  });

});


app.post("/", function(request, response) {
  var item = request.body.newItem;
  // console.log(item);
  items.push(item);
  response.redirect("/");

})

app.listen("3000", function() {

  console.log("server running on 3000");
})
