const route = require("express").Router();

route.get("/", (req, res) => {
  // res.json({
  //   message: "Home Page",
  // });

  res.render('home.ejs')
});

const movieRoutes = require("./movie");
route.use("/movies", movieRoutes);

module.exports = route;
