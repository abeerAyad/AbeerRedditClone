/* eslint-disable no-undef */
fetchData('/posts').then((data) => {
  createPost(data);
});

const addPostBtn = document.querySelector('.add-post-btn');

addPostBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = '/addpost';
});
