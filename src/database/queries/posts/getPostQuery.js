/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getPostQuery = () => {
  // eslint-disable-next-line no-undef

  sql = {
    text: `SELECT
   posts.*,
    users.username,
    COUNT(DISTINCT comments.id) AS comments_count,
    COUNT(DISTINCT CASE WHEN votes.vote_type = 'up' THEN votes.id END) AS up_votes_count,
    COUNT(DISTINCT CASE WHEN votes.vote_type = 'down' THEN votes.id END) AS down_votes_count
    FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN comments ON posts.id = comments.post_id
    LEFT JOIN votes ON posts.id = votes.post_id
    GROUP BY posts.id, users.username
    ORDER BY up_votes_count DESC;`,
  };
  return connection.query(sql);
};

module.exports = getPostQuery;
