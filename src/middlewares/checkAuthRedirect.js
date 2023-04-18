/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const { verifyToken } = require('../utils/jwt');

const checkAuthRedirect = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.redirect('/login');
  }
  verifyToken(token)
    .then((decoded) => {
      next();
    })
    .catch((err) => res.redirect('/login'));
};

module.exports = checkAuthRedirect;
