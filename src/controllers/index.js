const { getPost, showHomePost } = require('./getPost');
const { addPost, addNewPost } = require('./addPost');
const deletePost = require('./deletePost');

module.exports = {
  getPost, showHomePost, addPost, addNewPost, deletePost,
};
