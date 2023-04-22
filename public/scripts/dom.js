/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const postContent = document.querySelector('.post-content');
const defaultAvatar = ['../img/avatar_default_0.png', '../img/avatar_default_1.png', '../img/avatar_default_2.png', '../img/avatar_default_2.png'];

// const voteContent = document.querySelector('.vote-content');
const usernameLogin = document.querySelector('.username');
const postsContainer = document.querySelector('.posts');
let commentsToggle = false;
const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};
const createDom = (data) => {
  // usernameLogin.textContent = data.username;
  const createPost = createElement('div', 'create-post', postsContainer);
  createPost.textContent = '';
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
  const commentIcon = createElement('img', '', commentsMain);
  commentIcon.src = '../img/comments.png';
  const countComments = createElement('span', 'count', commentsMain);
  commentsMain.addEventListener('click', () => {
    commentsToggle = true;
    const allComments = document.querySelector('.all-comment');
    if (commentsToggle) {
      fetchData(`/comments/${data.id}`).then((result) => {
        countComments.textContent = result.comments.length;
        allComments.textContent = '';
        result.comments.forEach((comment) => {
          const randomAvatar = Math.floor(Math.random() * defaultAvatar.length);
          const commentsContent = createElement('div', 'content-comments', allComments);
          const userInfoComment = createElement('div', 'user-info-comment', commentsContent);
          const userImg = createElement('img', 'user-img', userInfoComment);
          userImg.src = defaultAvatar[randomAvatar];
          const nameUser = createElement('h5', 'name-user', userInfoComment);
          nameUser.textContent = comment.username;
          const createCommentTime = createElement('span', 'comment-create', userInfoComment);
          createCommentTime.textContent = `${new Date(comment.created_at).getHours()} hr.ago`;
          const commentTextContent = createElement('p', 'comment-text', commentsContent);
          commentTextContent.textContent = comment.comment;
        });
      });
    } else {
      // commentsToggle = false;
      allComments.textContent = '';
    }
  });

  const commentText = createElement('p', '', commentsMain);
  commentText.textContent = 'Comments';

  const editMain = createElement('div', 'edit', commentsEditDelete);
  const editIcon = createElement('img', '', editMain);
  editIcon.src = '../img/edit.png';
  const editText = createElement('p', '', editMain);
  editText.textContent = 'Edit';
  editMain.addEventListener('click', () => {
    location.href = `/editPost/${data.id}`;
  });

  const deleteMain = createElement('div', 'delete', commentsEditDelete);
  const deleteIcon = createElement('img', '', deleteMain);
  deleteIcon.src = '../img/delete.png';
  deleteMain.addEventListener('click', () => {
    deleteFetch(`/delete/${data.id}`);
  });

  const deleteText = createElement('p', '', deleteMain);
  deleteText.textContent = 'Delete';

  const commentsContainer = createElement('div', 'comment-container', postDetails);
  const commentsText = createElement('textarea', '', commentsContainer);
  commentsText.setAttribute('name', 'comment');
  commentsText.setAttribute('placeholder', 'Enter Your Comment');

  commentSubmit = createElement('button', 'comment-submit', commentsContainer);
  commentSubmit.textContent = 'Send';
  commentSubmit.addEventListener('click', () => {
    fetchComments('/comments', { comment: commentsText.value, postId: data.id });
  });
  const allcomments = createElement('div', 'all-comment', postDetails);
};
// eslint-disable-next-line no-unused-vars
const createPost = (allData) => {
  postsContainer.innerHTML = '';
  allData.result.forEach((data) => {
    createDom(data);
  });
};
const filterPost = (allData) => {
  createDom(allData);
};
