const bcrypt = require('bcrypt');
const User = require('../models/user-model');
const UserDto = require('../dtos/user-dto');
const { generateTokens, saveRefreshToken } = require('./token-service');
const ApiError = require('../exceptions/api-errors');

const registrationService = async (login, password) => {
  const candidate = await User.findOne({ login });

  if (candidate) {
    throw ApiError.BadRequest("Пользователь уже существует");
  }

  const hashedPassword = await bcrypt.hash(password, 3);
  const savedUser = await User.create({ login, password: hashedPassword });

  const user = new UserDto(savedUser);
  const tokens = generateTokens({ ...user });

  await saveRefreshToken(user.id, tokens.refreshToken);

  return { user, tokens }
}

module.exports = registrationService;