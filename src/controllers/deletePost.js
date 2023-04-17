/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const { deletePostQuery } = require('../database/querirs');

const deletePost = (req, res) => {
  // eslint-disable-next-line linebreak-style
  const { id } = req.params;
  console.log(id, 'jjjj');
  deletePostQuery(id).then(() => {
    location.href = '/post';
  }).catch((err) => console.log(err));
};
module.exports = deletePost;
