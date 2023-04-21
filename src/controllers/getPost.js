/* eslint-disable import/no-unresolved */
const { join } = require('path');
// eslint-disable-next-line import/extensions
const { getPostQuery } = require('../database/queries');

const showHomePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

const getPost = (req, res) => {
  getPostQuery()
    .then((data) => {
      // console.log(data.rows);
      // data.rows.reduce((a, b) => console.log(...a+...b))
      res.json({ result: data.rows });
    })
    .catch(() => {
      res.status(500).json({ msg: 'ERROR SERVER!' });
    });
};

module.exports = { getPost, showHomePost };
