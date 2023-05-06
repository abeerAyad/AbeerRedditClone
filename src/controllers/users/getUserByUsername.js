/* eslint-disable no-undef */
const { join } = require('path');
const { getUserInfo } = require('../../database/queries');

const getProfilePages = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', '..', 'public', 'html', 'profile.html'),
  );
};

const getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  getUserInfo(username)
    .then((data) => {
      res.json(data.rows[0]);
    })
    .catch((err) => next(err));
};

module.exports = { getUserByUsername, getProfilePages };
