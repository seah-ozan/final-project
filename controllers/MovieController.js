const { Movie } = require("../models");

class MovieController {
  static getMovies(req, res) {
    
    Movie.findAll()
      .then((movies) => {
        // res.json(movies);
        res.render("movie.ejs", { movies });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static getMovieById(req, res) {
    //
    const id = Number(req.params.id);
    Movie.findByPk(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static submitPage(req, res) {
    res.render("submitPage.ejs");
  }

  static submit(req, res) {
    //
    //const { task } = req.body;
    Movie.create({
      
      status: "",
    })
      .then((result) => {
        // res.json(result);
        res.redirect("/movies");
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static remove(req, res) {
    //
    const id = +req.params.id;
    Movie.destroy({
      where: { id },
    }).then((result) => {
      result
        ? // res.json({ message: `Id ${id} has been removed` })
          res.redirect("/movies")
        : res.json({ message: `Id ${id} has not been removed` });
    });
  }

  static editPage(req, res) {
    const id = +req.params.id;
    Movie.findByPk(id)
      .then((movie) => {
        res.render("editPage.ejs", { movie });
      })
      .catch((err) => res.json(err));
  }

  static edit(req, res) {
    //
    const id = +req.params.id;
    const { status } = req.body;
    Movie.update(
      {
        status,
      },
      {
        where: { id },
      }
    )
      .then((result) => {
        result[0]
          ? // res.json({ message: `Id ${id} has been edited` })
            res.redirect("/movies")
          : res.json({ message: `Can't edit Id ${id}` });
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

module.exports = MovieController;
