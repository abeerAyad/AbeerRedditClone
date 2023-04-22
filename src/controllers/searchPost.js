const { searchPostQuery } = require('../database/queries');

const searchPost = (req, res, next) => {
  const { searchTitle } = req.body;
  searchPostQuery(searchTitle).then((data) => {
    res.json({ result: data.rows });
  }).catch((err) => next(err));
};

module.exports = searchPost;
