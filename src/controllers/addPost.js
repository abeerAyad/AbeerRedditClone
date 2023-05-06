/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const { join } = require('path');
const { addPostQuery } = require('../database/queries');
const { postFormSchema } = require('../utils/validation');

const addNewPost = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', 'public', 'html', 'addPostForm.html'),
  );
};
const addPost = (req, res, next) => {
  const { title, content_post, image_url } = req.body;
  const { error, value } = postFormSchema
    .validateAsync({ title, content_post, image_url }, { abortEarly: false })
    .then(() => addPostQuery({
      title,
      content_post,
      image_url,
      user_id: req.user.id,
    })).then((data) => res.status(201).json({
      error: false,
      message: 'Created Post successfully',
      data: data.rows[0],
    }))
    .catch((err) => next(err));
};

module.exports = { addPost, addNewPost };
