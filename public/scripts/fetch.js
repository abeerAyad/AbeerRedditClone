/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */

const fetchData = (url) => fetch(url).then((res) => res.json());
const fetchPost = (url, data) => fetch(url, {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then(() => location.href = '/post');

deleteFetch = (url) => fetch(url, { method: 'DELETE' });

authFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json()).then((result) => {
  if (result.error) {
    customErrors(result.data.message);
  } else {
    localStorage.setItem('userData', JSON.stringify(data));
    location.href = '/post';
  }
})
  .catch((err) => console.log(err, 'errors'));

logoutFetch = (url) => {
  fetch(url).then((res) => res.json())
    .then(() => location.href = '/login')
    .catch((err) => console.log(err));
};

allFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((err) => console.log(err));

editFetch = (url, data) => fetch(url, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json())
  .then(() => location.href = '/post')
  .catch((err) => console.log(err));
