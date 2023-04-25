const { getUserIdQuery } = require('../../database/queries');

const getUserById = (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  getUserIdQuery(id)
    .then((data) => console.log(data.rows))
    .catch((err) => {
        console.log(err)
        next(err)
    });
};

module.exports = getUserById;
