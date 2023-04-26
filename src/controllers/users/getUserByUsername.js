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
      console.log(data);
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = { getUserByUsername, getProfilePages };
