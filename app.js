const mongoose = require('mongoose');
const express = require('express');

const router = require('./src/routes/user');
const errorMiddleware = require('./src/middlewares/error-middleware');
const { DB_CONNECTION, PORT } = require('./config');

const app = express();
app.use(express.json());
app.use('/', router);
app.use(errorMiddleware);

const startApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);

    app.listen(PORT, () => console.log(`Порт: ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startApp();