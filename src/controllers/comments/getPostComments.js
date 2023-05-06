const getPostCommentsQuery = require('../../database/queries/comments/getPostComments');

const getCommentsPosts = (req, res, next) => {
  const postId = req.params.id;
  getPostCommentsQuery(postId).then((data) => {
    res.json({ comments: data.rows });
  }).catch((err) => next(err));
};
module.exports = getCommentsPosts;
