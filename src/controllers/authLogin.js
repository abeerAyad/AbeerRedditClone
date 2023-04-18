/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { join } = require('path');
const bcrypt = require('bcrypt');
const { userLoginQuery } = require('../database/querirs');
const { userLoginSchema } = require('../utils/validation');
const { generateAccessToken } = require('../utils/jwt');
const CustomError = require('../utils/helpers/customError');

const getLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'login.html'));
};

const authLoginUser = (req, res, next) => {
  const { email, password } = req.body;
  const { error, value } = userLoginSchema
    .validateAsync({ email, password }, { abortEarly: false })
    .then(() => userLoginQuery(email))
    .then((data) => {
      const user = data.rows[0];
      req.user = user;
      if (!data.rows.length) {
        throw new CustomError('That Email is not registered', 401);
      }
      return bcrypt.compare(password, user.password);
    })
    .then((isMatch) => {
      const { id, username, email } = req.user;
      if (!isMatch) {
        throw new CustomError('Email or Password is  Wrong', 401);
      }
      return generateAccessToken({ id, username, email });
    })
    .then((token) => {
      res.cookie('token', token).json({ msg: 'logged In' });
    })
    .catch((err) => next(err));
};
module.exports = { authLoginUser, getLogin };
