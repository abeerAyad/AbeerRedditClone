/* eslint-disable no-undef */
const logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', () => {
  logoutFetch('/logout');
});
