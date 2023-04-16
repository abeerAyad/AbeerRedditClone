const { join } = require('path');
const { getPostQuery } = require('../database/querirs');

const showHomePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
};

const getPost = (req, res) => {
  getPostQuery()
    .then((data) => {
      res.json({ result: data.rows });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ msg: 'ERROR SERVER!' });
    });
};

module.exports = { getPost, showHomePost };
