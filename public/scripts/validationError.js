/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const titleError = document.querySelector('.error-title');

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email-user');
const passwordInput = document.querySelector('#password-user');
const confirmPasswordInput = document.querySelector('#confirmPassword-user');

const uField = document.querySelector('.username-field');
const eField = document.querySelector('.email-field');
const pField = document.querySelector('.password-field');
const cField = document.querySelector('.confirm-password-field');

function checkEmail() { // checkEmail function
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(pattern)) {
    eField.classList.add('error');
    eField.classList.remove('valid');
    const errorTxt = eField.querySelector('.error-txt');
    (emailInput.value !== '') ? errorTxt.innerText = 'Enter a valid email address' : errorTxt.innerText = "Email can't be blank";
  } else {
    eField.classList.remove('error');
    eField.classList.add('valid');
    errorTxt.innerText = '';
  }
}

function checkValid(input, field) {
  if (input.value === '') {
    field.classList.add('error');
    field.classList.remove('valid');
  } else {
    field.classList.remove('error');
    field.classList.add('valid');
  }
}

const customErrors = (errors) => {
  errors.forEach((error) => {
    if (error.context.label === 'username') {
      (usernameInput.value === '') ? uField.classList.add('shake', 'error') : checkValid(usernameInput, uField);
      usernameInput.onkeyup = () => checkValid(usernameInput, uField); // calling checkPassword function on pass input keyup
    }

    if (error.context.label === 'email') {
      (emailInput.value === '') ? eField.classList.add('shake', 'error') : checkEmail();
      emailInput.onkeyup = () => { checkEmail(); };
    }

    if (error.context.label === 'password') {
      (passwordInput.value === '') ? pField.classList.add('shake', 'error') : checkValid(passwordInput, pField);
      passwordInput.onkeyup = () => { checkValid(passwordInput, pField); };
    }

    if (error.context.label === 'confirmPassword') {
      (passwordInput.value !== confirmPasswordInput.value) ? cField.classList.add('shake', 'error') : checkValid(confirmPasswordInput, cField);
      confirmPasswordInput.onkeyup = () => checkValid(confirmPasswordInput, cField);
    }

    // if (error.context.label === 'title') {
    //   domError(titleError, 'Title is not allowed to be empty');
    //   titleError.classList.add('error-txt');
    // }
  });
};

// setTimeout(() => {
//   eField.classList.remove('shake');
//   pField.classList.remove('shake');
//   uField.classList.remove('shake');
//   cField.classList.remove('shake');
// }, 500);
