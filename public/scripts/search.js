/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', () => {
  allFetch('/search', { searchTitle: searchInput.value }).then((data) => createPost(data));
});
