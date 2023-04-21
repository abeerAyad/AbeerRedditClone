/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', () => {
  console.log(searchInput.value)
  searchFetch('/search', { searchTitle: searchInput.value }).then((data) => console.log(data))
});
