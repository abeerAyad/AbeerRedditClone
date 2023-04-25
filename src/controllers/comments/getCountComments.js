const { getCountCommentsQuery } = require('../../database/queries');

const getCountComments = (req, res, next) => {
  const { postId } = req.params;
  getCountCommentsQuery(postId).then((data) => {
    res.json({ count: data.rows[0] });
  })
    .catch((err) => next(err));
};
module.exports = getCountComments;
