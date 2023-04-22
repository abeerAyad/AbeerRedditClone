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
  .then(() => {
    location.href = '/post';
  })
  .catch((err) => res.status(500).json({ msg: 'Internal Server Error!' }));

deleteFetch = (url) => fetch(url, { method: 'DELETE' }).then(() => location.reload());

signupFetch = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((result) => {
    if (result.error) {
      customErrors(result.data.message);
    } else {
      location.href = '/post';
    }
  })
    .catch((err) => console.log(err, 'errors'));
};

loginFetch = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then((result) => {
      if (result.error) {
        customErrors(result.data.message);
      } else {
        location.href = '/post';
      }
    })

    .catch((err) => console.log(err));
};

logoutFetch = (url) => {
  fetch(url).then((res) => res.json())
    .then(() => location.href = '/login')
    .catch((err) => console.log(err));
};

fetchComments = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

searchFetch = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json())
  .catch((err) => console.log(err, 'fffffffffff'));

editFetch = (url, data) => fetch(url, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json())
  .then(() => location.href = '/post')
  .catch((err) => {
    console.log(err);
  });
