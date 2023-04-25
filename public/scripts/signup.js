/* eslint-disable no-undef */
const submitBtn = document.querySelector('.submit-data');

// console.log(submitBtn, email, password)
submitBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email-user').value;
  const password = document.getElementById('password-user').value;
  const confirmPassword = document.getElementById('confirmPassword-user').value;
  authFetch('/signup', {
    username, email, password, confirmPassword,
  });
});
