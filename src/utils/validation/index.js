const userSignupSchema = require('./signupSchema');
const userLoginSchema = require('./loginSchema');
const commentSchema = require('./commentValidation');
const postFormSchema = require('./postFormSchema');
const editFormSchema = require('./editFormSchema');

module.exports = {
  userSignupSchema,
  userLoginSchema,
  commentSchema,
  postFormSchema,
  editFormSchema,
};
