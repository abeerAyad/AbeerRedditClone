/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const addPost = document.querySelector('.addPost');
const titleInput = document.querySelector('#title');
const titleError = document.querySelector('.error-title');

addPost.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const image_url = document.getElementById('imgUrl').value;
  const content_post = document.getElementById('contentPost').value;
  // eslint-disable-next-line semi, no-console
  if (titleInput.value !== '') {
    fetchPost('/addpost', {
      title, image_url, content_post,
    });
  } else {
    domError(titleError, 'Title is not allowed to be empty');
    titleError.classList.add('error-txt');
  }
});
