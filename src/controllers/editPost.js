/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { join } = require('path');
const { editPostQuery, getPostByIdQuery } = require('../database/queries');
const CustomError = require('../utils/helpers/customError');
const { editFormSchema } = require('../utils/validation');

const getEditPost = (req, res) => {
  res.sendFile(
    join(__dirname, '..', '..', 'public', 'html', 'editPost.html'),
  );
};
const editPost = (req, res, next) => {
  const { title, content_post, image_url } = req.body;
  const { id } = req.params;
  const { error, value } = editFormSchema
    .validateAsync({ title, content_post, image_url }, { abortEarly: false })
    .then(() => getPostByIdQuery(req.params.id))
    .then((data) => {
      if (data.rows[0].user_id !== req.user.id) {
        throw new CustomError('unauthorized', 401);
      }
    }).then(() => editPostQuery(id, title, content_post, image_url))
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
