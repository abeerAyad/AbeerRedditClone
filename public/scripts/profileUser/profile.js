/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const addPost = document.querySelector('.add-post');
const usernameProfile = JSON.parse(localStorage.getItem('username-post'));
const userLogged = JSON.parse(localStorage.getItem('userData'));
const profileUserInfo = document.querySelector('.profile-user-info');

const createDetailsUser = (data) => {
  const avatar = createElement('div', 'avatar', profileUserInfo);
  const imgProfile = createElement('img', 'user-avatar', avatar);
  imgProfile.src = '../img/avatar_default_5.png';
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

if (usernameProfile !== userLogged.username) {
  addPost.style.display = 'none';
} else {
  addPost.style.display = 'flex';
}
