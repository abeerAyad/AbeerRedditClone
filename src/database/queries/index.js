const getPostQuery = require('./posts/getPostQuery');
const addPostQuery = require('./posts/addPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');
const userSignupQuery = require('./authUser/signupQuery');
const userLoginQuery = require('./authUser/loginQuery');
const searchPostQuery = require('./posts/searchPostQuery');
const addCommentsQuery = require('./comments/addCommentsQuery');

module.exports = {
  getPostQuery,
  addPostQuery,
  deletePostQuery,
  userSignupQuery,
  userLoginQuery,
  searchPostQuery,
  addCommentsQuery,
};
