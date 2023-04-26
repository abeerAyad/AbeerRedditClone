/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const username = location.href.split('/')[4];
console.log(username);
fetchData(`/user/${username}`).then((data) => console.log(data));

fetchData(`/userProfile/${username}`).then((data) => console.log(data));
