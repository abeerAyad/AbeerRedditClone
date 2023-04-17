/* eslint-disable prefer-regex-literals */
const Joi = require('joi');

const userSignupSchema = Joi.object({
  username: Joi.string().pattern(new RegExp('^[a-zA-Z0-9 ._#?!-@]')).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  password: Joi.string().min(8).max(30).pattern(new RegExp('^[a-zA-Z0-9._#?!-@]'))
    .required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = userSignupSchema;
