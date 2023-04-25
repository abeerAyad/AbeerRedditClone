/* eslint-disable camelcase */
const { join } = require('path');
const { editPostQuery } = require('../database/queries');

const getEditPost = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', 'public', 'html', 'editPost.html'),
  );
};
const editPost = (req, res, next) => {
  const { title, content_post, image_url } = req.body;
  const { id } = req.params;
  editPostQuery(id, {
    title,
    content_post,
    image_url,
  })
    .then((data) => {
      res.status(201).json({
        error: false,
        message: 'Edit Post successfully',
        data: data.rows[0],
      });
    })
    .catch((err) => next(err));
};

module.exports = { editPost, getEditPost };
