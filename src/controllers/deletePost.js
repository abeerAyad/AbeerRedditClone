/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const { deletePostQuery } = require('../database/querirs');

// eslint-disable-next-line no-unused-vars
const deletePost = (req, res) => {
  // eslint-disable-next-line linebreak-style
  const { id } = req.params;
  console.log(id, 'jjjj');
  deletePostQuery(id).then(() => {
    res.redirect('/post');
  }).catch((err) => console.log(err));
};
module.exports = deletePost;
