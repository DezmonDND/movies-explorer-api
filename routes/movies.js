const moviesRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie
} = require('../controllers/movies');
const { createMovieValidation, deleteMovieValidation } = require('../middlewares/validationJoi');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovieValidation, createMovie);
moviesRouter.delete('/:movieId', deleteMovieValidation, deleteMovie);

module.exports = moviesRouter;
