/* eslint-disable no-undef */
/* eslint-disable camelcase */
const { addCommentsQuery } = require('../../database/queries');
const { commentSchema } = require('../../utils/validation');

const addCommentsPost = (req, res, next) => {
  const { comment, postId } = req.body;
  commentSchema.validateAsync({comment}, { abortEarly: false })
    .then(() => addCommentsQuery({ comment, user_id: req.user.id, post_id: postId }))
    .then((data) => {
      console.log( data.rows[0]);
      res.status(201)
        .json({
          error: false,
          message: 'Comment added successfully',
          comments: data.rows[0],
        });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = addCommentsPost;
