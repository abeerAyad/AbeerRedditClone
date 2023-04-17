const { getPost, showHomePost } = require('./getPost');
const { addPost, addNewPost } = require('./addPost');
const deletePost = require('./deletePost');
const authSignupUser = require('./authSignup');

module.exports = {
  getPost, showHomePost, addPost, addNewPost, deletePost, authSignupUser,
};
