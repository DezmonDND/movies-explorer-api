require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index');
const { ServerErrorHandler } = require('./errors/errorHandlers/ServerErrorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DB_ADDRESS_DEV } = require('./utils/constants');

const { PORT = 3000, DB_ADDRESS } = process.env;
const { NODE_ENV } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(NODE_ENV === 'production' ? DB_ADDRESS : DB_ADDRESS_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(requestLogger);

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(ServerErrorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
