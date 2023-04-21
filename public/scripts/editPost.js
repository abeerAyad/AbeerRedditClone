/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
const id = location.href.split('/')[4];
let title = document.getElementById('title');
let image_url = document.getElementById('imgUrl');
let content_post = document.getElementById('contentPost');
const editPost = document.querySelector('.editPost');

fetchData(`/getPost/${id}`).then((data) => {
  title.value = data[0].title;
  image_url.value = data[0].image_url;
  content_post.value = data[0].content_post;
});

editPost.addEventListener('click', () => {
  title = title.value;
  image_url = image_url.value;
  content_post = content_post.value;
  editFetch(`/editPostData/${id}`, {
    title, image_url, content_post,
  }).catch((err) => console.log(err));
});
