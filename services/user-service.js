const bcrypt = require('bcrypt')

const User = require('../models/user-model');
const Token = require('../models/token-model');
const UserDto = require('../dtos/user-dto')
const { generateTokens } = require('./token-service');

const registrationService = async (login, password) => {
  const candidate = await User.findOne({ login });

  if (!candidate) {
    const hashedPassword = await bcrypt.hash(password, 3);

    const savedUser = await User.create({ login, password: hashedPassword });

    const user = new UserDto(savedUser);
    const tokens = generateTokens(user);

    await Token.create({ userId: savedUser._id, token: tokens.refresh_token });

    return { user, tokens }
  }
}

module.exports = registrationService;