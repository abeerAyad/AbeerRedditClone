/* eslint-disable no-undef */
/* eslint-disable camelcase */
const connection = require('../../config/connection');

const addPostQuery = ({
  title, content_post, image_url, user_id,
}) => {
  sql = {
    text:
      'INSERT INTO posts (title, content_post, image_url, user_id) VALUES ($1,$2,$3,$4) RETURNING id, title, content_post, image_url, user_id',
    values: [title, content_post, image_url, user_id],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;
