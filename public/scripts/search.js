/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', () => {
  searchFetch('/search', { searchTitle: searchInput.value }).then((data) => createPost(data));
});
