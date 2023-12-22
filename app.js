const mongoose = require('mongoose');
const express = require('express');

const router = require('./routes/index');
const { DB_CONNECTION, PORT } = require('./config');

const app = express();
app.use('/', router)

const startApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);

    app.listen(PORT, () => console.log(`Порт: ${PORT}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startApp();