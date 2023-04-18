/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
class CustomError extends Error {
  constructor(status, msg) {
    super(msg);
    this.msg = msg;
    this.status = status;
  }
}

module.exports = CustomError;
