/* eslint-disable no-console */
/* eslint-disable camelcase */
const { join } = require('path');
const { addPostQuery } = require('../database/querirs');

const addNewPost = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', 'public', 'html', 'addPostForm.html'),
  );
};
const addPost = (req, res) => {
  console.log(req.body, 'aaaaaaaaaaaaaaaaaaa ');
  const {
    title, content_post, image_url,
  } = req.body;

  addPostQuery({
    title, content_post, image_url, user_id: 2,
  }).then((data) => {
    console.log(data.rows);
    return res.json({ data: data.rows[0] });
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({ msg: 'ERROR SERVER!' });
  });
};

module.exports = { addPost, addNewPost };
