/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const username = location.href.split('/')[4];
fetchData(`/user/${username}`).then((data) => createDetailsUser(data));

fetchData(`/userProfile/${username}`).then((data) => createPost(data));
