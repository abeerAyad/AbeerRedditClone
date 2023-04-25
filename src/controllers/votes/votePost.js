/* eslint-disable camelcase */
const {
  voteQuery, updateVoteQuery, getVotesQuery, deleteVoteQuery,
} = require('../../database/queries');
const { getVoteCount } = require('../../database/queries/votes');

const votePost = (req, res, next) => {
  const { postId } = req.params;
  const { voteType } = req.body;
  const userId = req.user.id;

  getVotesQuery(userId, postId)
    .then((data) => {
      if (data.rowCount === 0) {
        return voteQuery({ voteType, user_id: userId, post_id: postId });
      }
      const { vote_type, id } = data.rows[0];
      if (vote_type === voteType) {
        return deleteVoteQuery(id);
      }
      return updateVoteQuery(voteType, id);
    }).then((vote) => {
      req.vote = vote.rows[0].vote_type;
      return getVoteCount(postId);
    })
    .then((data) => {
      const totalVote = data.rows[0].up_votes_count - data.rows[0].down_votes_count;
      res.json({
        error: false,
        data: { type: req.vote, totalVote, ...data.rows[0] },
      });
    })
    .catch((err) => next(err));
};
module.exports = votePost;
