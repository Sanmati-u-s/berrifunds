const User = require("../models/User");

const findByEmail = (email) => {
  return User.findOne({ email });
};

const createUser = (userData) => {
  return User.create(userData);
};

module.exports = {
  findByEmail,
  createUser,
};
