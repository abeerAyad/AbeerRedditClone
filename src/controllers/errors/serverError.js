/* eslint-disable no-empty */
/* eslint-disable consistent-return */
const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const CustomError = require('../../utils/helpers/customError');

// eslint-disable-next-line no-unused-vars
const severError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      data: {
        message: err.details,
      },
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: 'Unauthorized!',
      },
    });
  }

  if (err instanceof CustomError) {
    return res.status(401).json({
      error: err.status,
      message: err.msg,
    });
  }

  res.status(500).json({
    error: true,
    data: {
      message: 'Internal server error',
    },
  });
};

module.exports = severError;
