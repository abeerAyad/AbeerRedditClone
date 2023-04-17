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
  .then(() => {
    location.href = '/post';
  })
  .catch((err) => console.log(err));

deleteFetch = (url) => fetch(url, { method: 'DELETE' }).then(() => location.reload());

signupFetch = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
