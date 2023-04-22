/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const usernameError = document.querySelector('.username');
const emailError = document.querySelector('.email');
const passwordError = document.querySelector('.password');
const confirmPasswordError = document.querySelector('.confirmPassword');
// const commentValidate = document.querySelector('.comment-validate');

const customErrors = (errors) => {
  errors.forEach((error) => {
    if (error.context.label === 'username') {
      domError(usernameError, error.message);
    }

    if (error.context.label === 'email') {
      domError(emailError, error.message);
    }

    if (error.context.label === 'password') {
      domError(passwordError, error.message);
    }

    if (error.context.label === 'confirmPassword') {
      domError(confirmPasswordError, error.message);
    }
    if (error.context.label === 'comment') {
      // domError(commentValidate, error.message);
    }
  });
};
