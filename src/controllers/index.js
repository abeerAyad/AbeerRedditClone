const { getPost, showHomePost } = require('./getPost');
const { addPost, addNewPost } = require('./addPost');
const { editPost, getEditPost } = require('./editPost');
const deletePost = require('./deletePost');
const authSignupUser = require('./authSignup');
const { authLoginUser, getLogin } = require('./authLogin');
const logout = require('./logout');
const searchPost = require('./searchPost');
const addCommentsPost = require('./comments/addCommentsPost');
const getPostById = require('./getPostById');
const getCommentsPosts = require('./comments/getPostComments');
const deleteCommentById = require('./comments/deleteCommentById');
const votePost = require('./votes/votePost');
const {getUserByUsername,getProfilePages} = require('./users/getUserByUsername');
const getProfileUser = require('./users/getProfile');

module.exports = {
  getPost,
  showHomePost,
  addPost,
  addNewPost,
  editPost,
  getEditPost,
  deletePost,
  authSignupUser,
  authLoginUser,
  getLogin,
  logout,
  searchPost,
  addCommentsPost,
  getPostById,
  getCommentsPosts,
  deleteCommentById,
  getUserByUsername,
  votePost,
  getProfileUser,
  getProfilePages,
};
