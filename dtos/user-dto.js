class UserDto {
  id; login;

  constructor(model) {
    const { _id, login } = model

    this.id = _id;
    this.login = login
  }
}

module.exports = UserDto;