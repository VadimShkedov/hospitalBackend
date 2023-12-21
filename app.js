const mongoose = require('mongoose');

const { DB_CONNECTION } = require('./config');

const startApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startApp();