const { getPost, showHomePost } = require('./getPost');
const { addPost, addNewPost } = require('./addPost');
const deletePost = require('./deletePost');
const authSignupUser = require('./authSignup');
const { authLoginUser, getLogin } = require('./authLogin');
const logout = require('./logout');
const searchPost = require('./searchPost');
const addCommentsPost = require('./addCommentsPost');

module.exports = {
  getPost,
  showHomePost,
  addPost,
  addNewPost,
  deletePost,
  authSignupUser,
  authLoginUser,
  getLogin,
  logout,
  searchPost,
  addCommentsPost,
};
