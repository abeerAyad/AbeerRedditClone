/* eslint-disable no-undef */
const connection = require('../../config/connection');

/* eslint-disable camelcase */
const editPostQuery = (id, { title, content_post, image_url }) => {
  sql = {
    text: 'UPDATE posts SET title =$2, content_post=$3, image_url=$4 WHERE id = $1',
    values: [id, title, content_post, image_url],
  };
  return connection.query(sql);
};

module.exports = editPostQuery;
