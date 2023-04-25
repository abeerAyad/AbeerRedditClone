/* eslint-disable no-undef */
const submitBtn = document.querySelector('.submit-data');

// console.log(submitBtn, email, password)
submitBtn.addEventListener('click', () => {
  const email = document.getElementById('email-user').value;
  const password = document.getElementById('password-user').value;
  authFetch('/login', {
    email, password,
  });
});
