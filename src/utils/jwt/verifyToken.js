const { verify } = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env;

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});
module.exports = verifyToken;
