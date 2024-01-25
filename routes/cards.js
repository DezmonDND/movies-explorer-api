const cardsRouter = require('express').Router();
const {
  getCards, createCard, deleteCard,
} = require('../controllers/cards');
const { createCardValidation, deleteCardValidation } = require('../middlewares/validationJoi');

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCardValidation, createCard);
cardsRouter.delete('/:cardId', deleteCardValidation, deleteCard);

module.exports = cardsRouter;
