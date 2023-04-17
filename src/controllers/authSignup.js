/* eslint-disable no-shadow */
const bcrypt = require('bcrypt');
const { userSignupQuery } = require('../database/queries');
const { userSignupSchema } = require('../utils/validation');
const saltRounds  = 10;
const authSignupUser = (req, res) => {
  const {
    username, email, password, confirmPassword,
  } = req.body;

  const { error, value } = userSignupSchema.validate(
    {
      username, email, password, confirmPassword,
    },
    { abortEarly: false },
  );
  if (error) {
    res.json({
      error: true,
      data: {
        errors: error.details,
      },
    });
    return;
  }
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const data = { username, email, password: hash };
    userSignupQuery(data).then((data) => {
      console.log(data.rows,'dbbbbbbb');
    }).catch((err) => console.log(err));
  });
  console.log(value,'jjjjjjj');
};

module.exports = authSignupUser;
