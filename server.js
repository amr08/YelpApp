  var express = require("express");
  var PORT = process.env.PORT || 7000;


  var app = express();
  app.set("view engine", "ejs");

  var PORT = process.env.PORT || 7000;

//creating routes
  app.get("/", function(req,res) {
    res.render("landing");
  });

  app.get("/campgrounds", function(req,res){
    var campgrounds = [
      {name: "Creek", image: "http://cdn.thepondguy.com/images/homepage/pond-lake-promo.jpg"},
      {name: "Mountain View", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Camping_ground_in_Kippel.jpg"},
      {name: "Pond", image: "http://www.blm.gov/or/resources/recreation/images/photogallerypics/59_883Whittaker_Creek.JPG"}
      
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
        
  });

  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });