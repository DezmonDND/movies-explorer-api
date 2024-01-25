const routes = require('express').Router();
const cardsRouter = require('./cards');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validationJoi');

routes.post('/signin', loginValidation, login);
routes.post('/signup', createUserValidation, createUser);

routes.use('/users', auth, usersRouter);
routes.use('/movies', auth, cardsRouter);

module.exports = routes;
