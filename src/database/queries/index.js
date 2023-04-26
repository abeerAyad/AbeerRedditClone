const getPostQuery = require('./posts/getPostQuery');
const addPostQuery = require('./posts/addPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');
const userSignupQuery = require('./authUser/signupQuery');
const userLoginQuery = require('./authUser/loginQuery');
const searchPostQuery = require('./posts/searchPostQuery');
const addCommentsQuery = require('./comments/addCommentsQuery');
const editPostQuery = require('./posts/editPostQuery');
const getPostByIdQuery = require('./posts/getPostByIdQuery');
const deleteCommentByIdQuery = require('./comments/deleteCommentByIdQuery');
const {
  voteQuery, deleteVoteQuery, updateVoteQuery, getVotesQuery,
} = require('./votes');

const getProfileQuery = require('./users/userProfile');
const getUserInfo = require('./users/getUserInfo');

module.exports = {
  getPostQuery,
  addPostQuery,
  deletePostQuery,
  userSignupQuery,
  userLoginQuery,
  searchPostQuery,
  addCommentsQuery,
  editPostQuery,
  getPostByIdQuery,
  deleteCommentByIdQuery,
  voteQuery,
  updateVoteQuery,
  deleteVoteQuery,
  getVotesQuery,
  getProfileQuery,
  getUserInfo,
};
