/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const fetchData = (url) => fetch(url).then((res) => res.json());
const fetchPost = (url, data) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .catch((err) => console.log(err));
