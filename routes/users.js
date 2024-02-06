const usersRouter = require('express').Router();
const {
  updateUsersData, getUsersMe,
} = require('../controllers/users');
const { userDataValidation } = require('../middlewares/validationJoi');

usersRouter.get('/me', getUsersMe);
usersRouter.patch('/me', userDataValidation, updateUsersData);

module.exports = usersRouter;
