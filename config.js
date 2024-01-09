require('dotenv').config();

const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY;
const BACKEND_HOST = process.env.BACKEND_HOST;

module.exports = { 
  PORT, 
  DB_CONNECTION, 
  SECRET_ACCESS_KEY, 
  SECRET_REFRESH_KEY,
  BACKEND_HOST
}