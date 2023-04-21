/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');
const { userSignupQuery } = require('../database/queries');
const { userSignupSchema } = require('../utils/validation');
const { generateAccessToken } = require('../utils/jwt');

const saltRounds = 10;
const authSignupUser = (req, res, next) => {
  const {
    username, email, password, confirmPassword,
  } = req.body;
  const { error, value } = userSignupSchema
    .validateAsync(
      {
        username,
        email,
        password,
        confirmPassword,
      },
      { abortEarly: false },
    )
    .then(() => bcrypt.hash(password, saltRounds))
    .then((hash) => ({ username, email, password: hash }))
    .then((data) => userSignupQuery(data))
    .then((data) => data.rows[0])
    .then((data) => generateAccessToken(data))
    .then((token) => {
      res
        .cookie('token', token)
        .status(200)
        .json({ message: 'Sign up successfully 👌' });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = authSignupUser;
