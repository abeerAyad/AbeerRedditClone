/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const { deletePostQuery } = require('../database/querirs');

// eslint-disable-next-line no-unused-vars
const deletePost = (req, res) => {
  // eslint-disable-next-line linebreak-style
  const { id } = req.params;
  deletePostQuery(id)
    .then(() => res.status(200).json({
      error: false,
      data: {
        data: {
          message: 'Post deleted successfully',
        },
      },
    }))
    .then(() => {
      res.redirect('/post');
    })
    .catch((err) => console.log(err));
};
module.exports = deletePost;
