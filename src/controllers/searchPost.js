const { searchPostQuery } = require('../database/queries');

const searchPost = (req, res) => {
  console.log(req.body);
  const { searchTitle } = req.body;
  searchPostQuery(searchTitle).then((data) => {
    console.log(data.rows);
    res.json({ result: data.rows });
  }).catch((err) => console.log(err));
};

module.exports = searchPost;
