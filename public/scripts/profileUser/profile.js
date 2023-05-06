/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const postAdd = document.querySelector('.add-post');
const usernameProfile = JSON.parse(localStorage.getItem('username-post'));
const userLogged = JSON.parse(localStorage.getItem('userData'));
const profileUserInfo = document.querySelector('.profile-user-info');

const createDetailsUser = (data) => {
  const randomAvatar = Math.floor(Math.random() * defaultAvatar.length);

  const avatar = createElement('div', 'avatar', profileUserInfo);
  const imgProfile = createElement('img', 'user-avatar', avatar);
  imgProfile.src = defaultAvatar[randomAvatar];
  const details = createElement('div', 'details', profileUserInfo);
  const infoProfile = createElement('div', 'info', details);
  const nameProfile = createElement('h4', 'name', infoProfile);
  nameProfile.textContent = data.username;
  const emailProfile = createElement('p', 'email', infoProfile);
  emailProfile.textContent = data.email;

  const cakeDay = createElement('div', 'cake-day', infoProfile);
  const titleDay = createElement('h4', '', cakeDay);
  titleDay.textContent = 'Cake Day';
  const day = createElement('p', 'day', cakeDay);
  day.textContent = data.created_at.split(':')[0].slice(0, 10);
};
console.log(usernameProfile);
console.log(userLogged.username);
console.log(usernameProfile !== userLogged.username);
if (usernameProfile !== userLogged.username) {
  postAdd.style.display = 'none';
}

const addPostBtn = document.querySelector('.add-post-btn');

addPostBtn.addEventListener('click', () => {
  location.href = '/addpost';
});
