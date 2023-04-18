const { sign } = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env;

const generateToken = (payLoad) => new Promise((resolve, reject) => {
  sign(payLoad, TOKEN_SECRET, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

module.exports = generateToken;
