const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { userRouter } = require('./src/routes');
const errorMiddleware = require('./src/middlewares/error-middleware');
const { DB_CONNECTION, PORT } = require('./config');
const { CORS_OPTIONS } = require('./config')

const app = express();
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use('/', userRouter);
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