const { getProfileQuery } = require("../../database/queries");

const getProfileUser = (req, res, next) => {
     const { username } = req.params;
  getProfileQuery(username)
    .then((data) => {
      console.log(data);
      res.json({ result: data.rows });
    })
    .catch((err) => {
      next(err);
    });

};
module.exports = getProfileUser;
