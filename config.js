require('dotenv').config();

const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION;
const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY

module.exports = { PORT, DB_CONNECTION, SECRET_KEY, SECRET_ACCESS_KEY }