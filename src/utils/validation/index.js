const userSignupSchema = require('./signupSchema');
const userLoginSchema = require('./loginSchema');
const commentSchema = require('./commentValidation');
const postFormSchema = require('./postFormSchema');

module.exports = {
  userSignupSchema,
  userLoginSchema,
  commentSchema,
  postFormSchema,

};
