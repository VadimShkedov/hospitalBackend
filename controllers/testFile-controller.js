const User = require('../models/user-model')

const testController = async (req, res) => {
  const newUser = await User.create({
    login: "user",
    password: "pass"
  })

  res.status(200).json(newUser);
}

module.exports = { testController };