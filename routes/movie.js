const movieRoute = require("express").Router();
const MovieController = require("../controllers/MovieController")

movieRoute.get("/", MovieController.getMovies);
movieRoute.get("/details/:id", MovieController.getMovieById);
movieRoute.get("/submit", MovieController.submitPage)
movieRoute.post("/submit", MovieController.submit);
movieRoute.get("/remove/:id", MovieController.remove);
movieRoute.get('/edit/:id', MovieController.editPage)
movieRoute.post("/edit/:id", MovieController.edit);

module.exports = movieRoute;