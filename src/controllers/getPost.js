/* eslint-disable import/no-unresolved */
const { join } = require('path');
// eslint-disable-next-line import/extensions
const { getPostQuery } = require('../database/queries');

const showHomePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

const getPost = (req, res, next) => {
  // const { id } = req.params;
  getPostQuery()
    .then((data) => res.json({ result: data.rows }))
    .catch((err) => {
      console.log(err)
      next(err)
    });
};

module.exports = { getPost, showHomePost };
