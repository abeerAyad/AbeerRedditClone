/* eslint-disable no-undef */
/* eslint-disable camelcase */
const addPost = document.querySelector('.addPost');

addPost.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const image_url = document.getElementById('imgUrl').value;
  const content_post = document.getElementById('contentPost').value;
  // eslint-disable-next-line semi, no-console
  console.log('Clicked')
  fetchPost('/addpost', {
    title, image_url, content_post,
  })
    .then(() => {
    // eslint-disable-next-line no-restricted-globals
      location.href = '/post';
    }).catch((err) => console.log(err));
});
