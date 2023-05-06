/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const addPost = document.querySelector('.addPost');
addPost.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const image_url = document.getElementById('imgUrl').value;
  const content_post = document.getElementById('contentPost').value;
  fetchPost('/addpost', {
    title, image_url, content_post,
  });
});
