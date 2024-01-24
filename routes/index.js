const routes = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validationJoi');

routes.post('/signin', loginValidation, login);
routes.post('/signup', createUserValidation, createUser);

routes.use('/users', auth, usersRouter);
routes.use('/movies', auth, moviesRouter);

module.exports = routes;
