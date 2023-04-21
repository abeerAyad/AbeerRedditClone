const { getPostByIdQuery } = require('../database/queries');

const getPostById = (req, res, next) => {
  getPostByIdQuery(req.params.id)
    .then((data) => {
      res.json(data.rows);
    }).catch((err) => next(err));
};
module.exports = getPostById;
