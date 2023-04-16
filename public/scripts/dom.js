const postContent = document.querySelector('.post-content');
// const voteContent = document.querySelector('.vote-content');

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};
const createDom = (data) => {
  const createPost = createElement('div', 'create-post', postContent);
  const voteContent = createElement('div', 'vote-content', createPost);
  const postDetails = createElement('div', 'post-details', createPost);
  const upVoteImg = createElement('img', '', voteContent);
  upVoteImg.src = '../img/upvote.svg';
  const countVote = createElement('p', 'count-vote', voteContent);
  countVote.textContent = '3k';
  const downVoteImg = createElement('img', '', voteContent);
  downVoteImg.src = '../img/downvote.svg';

  const timeUserPost = createElement('div', 'time-user-post', postDetails);
  const postedUser = createElement('p', '', timeUserPost);
  postedUser.textContent = 'Posted By ';
  const userName = createElement('span', 'name-user', postedUser);
  userName.textContent = data.username;

  const timePosted = createElement('p', 'time', timeUserPost);
  timePosted.textContent = `${new Date(data.created_at).getHours()} hours ago`;
  timePosted.title = `${new Date(data.created_at)}`;

  const titlePost = createElement('div', 'title-post', postDetails);
  const title = createElement('h3', 'title', titlePost);
  title.textContent = data.title;

  const bodyPost = createElement('div', 'body-post', postDetails);
  const body = createElement('p', '', bodyPost);
  body.textContent = data.content_post;

  const imgPost = createElement('div', 'image-post', postDetails);
  const imgUrl = createElement('img', '', imgPost);
  imgUrl.src = data.image_url;

  const commentsEditDelete = createElement(
    'div',
    'comments-edit-delete',
    postDetails,
  );
  const commentsMain = createElement('div', 'comments', commentsEditDelete);
  const commentIcon = createElement('lord-icon', '', commentsMain);
  commentIcon.src = 'https://cdn.lordicon.com/pkmkagva.json';
  commentIcon.setAttribute('trigger', 'hover');
  commentIcon.style.width = '20px;';
  commentIcon.style.height = '20px;';

  const commentText = createElement('p', '', commentsMain);
  commentText.textContent = 'Comments';

  const editMain = createElement('div', 'comments', commentsEditDelete);
  const editIcon = createElement('img', '', editMain);
  editIcon.src = '../img/edit.png';
  const editText = createElement('p', '', editMain);
  editText.textContent = 'Edit';

  const deleteMain = createElement('div', 'comments', commentsEditDelete);
  const deleteIcon = createElement('lord-icon', '', deleteMain);
  deleteIcon.src = 'https://cdn.lordicon.com/jmkrnisz.json';
  deleteIcon.setAttribute('trigger', 'hover');
  deleteIcon.style.width = '20px;';
  deleteIcon.style.height = '20px;';
  const deleteText = createElement('p', '', deleteMain);
  deleteText.textContent = 'Delete';
};
// eslint-disable-next-line no-unused-vars
const createPost = (allData) => {
  allData.result.forEach((data) => {
    createDom(data);
  });
};
