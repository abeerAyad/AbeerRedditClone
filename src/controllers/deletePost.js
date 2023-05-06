/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const { deletePostQuery, getPostByIdQuery } = require('../database/queries');
const CustomError = require('../utils/helpers/customError');

// eslint-disable-next-line no-unused-vars
const deletePost = (req, res, next) => {
  // eslint-disable-next-line linebreak-style
  const { id } = req.params;
  getPostByIdQuery(req.params.id).then((data) => {
    if (data.rows[0].user_id !== req.user.id) {
      throw new CustomError('unauthorized', 401);
    }
  }).then(() => deletePostQuery(id))
    .then(() => res.status(200).json({
      error: false,
      data: {
        message: 'Post deleted successfully',
      },
    }))

    .catch((err) => next(err));
};
module.exports = deletePost;
