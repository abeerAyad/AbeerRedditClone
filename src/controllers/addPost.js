/* eslint-disable no-undef */
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
  const { title, content_post, image_url } = req.body;

  addPostQuery({
    title,
    content_post,
    image_url,
    user_id: req.user.id,
  })
    .then((data) => res.status(201).json({
      error: false,
      message: 'Created Post successfully',
      data: data.rows[0],
    }))
    .catch((err) => next(err));
};

module.exports = { addPost, addNewPost };
