const { deleteCommentByIdQuery } = require('../../database/queries');

const deleteCommentById = (req, res, next) => {
  const { id } = req.params;
  deleteCommentByIdQuery(id)
    .then(() => {
      res.status(200).json({
        error: false,
        data: {
          message: 'Comment Deleted successfully',
        },
      });
    })
    .then(() => res.redirect('/post'))
    .catch((err) => next(err));
};

module.exports = deleteCommentById;
