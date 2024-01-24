const usersRouter = require('express').Router();
const {
  getUsers, getOneUser, updateUsersData, getUsersMe,
} = require('../controllers/users');
const { userDataValidation, getOneUserValidation } = require('../middlewares/validationJoi');

usersRouter.get('/me', getUsersMe);
usersRouter.patch('/me', userDataValidation, updateUsersData);

module.exports = usersRouter;
