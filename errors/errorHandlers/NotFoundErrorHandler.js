const NotFoundError = require('../NotFoundError');

module.exports.NotFoundErrorHandler = (req, res, next) => {
  next(new NotFoundError('Такого пути не существует.'));
};
