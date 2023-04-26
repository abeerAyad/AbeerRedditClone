/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const postContent = document.querySelector('.post-content');
const defaultAvatar = ['../img/avatar_default_0.png', '../img/avatar_default_1.png', '../img/avatar_default_2.png', '../img/avatar_default_2.png'];
const userData = JSON.parse(localStorage.getItem('userData'));
const usernameLogin = document.querySelector('.username');
const postsContainer = document.querySelector('.posts');
const user = document.querySelector('.user');
user.textContent = userData.username;
user.addEventListener('click', () => {
  location.href = `/profile/${userData.username}`;
});

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};
const createCommentsContent = (allComments, comment, countComments) => {
  const randomAvatar = Math.floor(Math.random() * defaultAvatar.length);
  const commentsContent = createElement('div', 'content-comments', allComments);
  const userInfoComment = createElement('div', 'user-info-comment', commentsContent);
  const userImg = createElement('img', 'user-img', userInfoComment);
  userImg.src = defaultAvatar[randomAvatar];
  const nameUser = createElement('h5', 'name-user', userInfoComment);
  nameUser.textContent = comment.username;
  const createCommentTime = createElement('span', 'comment-create', userInfoComment);
  createCommentTime.textContent = getTimeSincePost(comment.created_at);
  const commentTextContent = createElement('p', 'comment-text', commentsContent);
  commentTextContent.textContent = comment.comment;
  if (comment.username === userData.username) {
    const deleteComment = createElement('lord-icon', 'delete delete-comment-icon', commentsContent);
    deleteComment.src = 'https://cdn.lordicon.com/kfzfxczd.json';
    deleteComment.setAttribute('trigger', 'hover');
    deleteComment.addEventListener('click', () => {
      if (comment.username === userData.username) {
        deleteFetch(`/deleteComment/${comment.id}`);
        countComments.textContent = +countComments.textContent - 1;
        commentsContent.remove();
      }
    });
  }
};

const createDom = (data) => {
  const createPost = createElement('div', 'create-post', postsContainer);
  createPost.textContent = '';
  const voteContent = createElement('div', 'vote-content', createPost);
  const postDetails = createElement('div', 'post-details', createPost);
  const upVoteImg = createElement('img', '', voteContent);
  upVoteImg.id = 'upvote';
  upVoteImg.src = '../img/upvote.svg';
  upVoteImg.addEventListener('click', () => {
    allFetch(`/votes/${data.id}/vote`, { voteType: 'up' })
      .then((result) => {
        countVote.textContent = result.data.totalVote;
      });
  });

  const countVote = createElement('p', 'count-vote', voteContent);
  countVote.textContent = data.up_votes_count - data.down_votes_count;

  const downVoteImg = createElement('img', '', voteContent);
  downVoteImg.id = 'upvote';
  downVoteImg.src = '../img/downvote.svg';
  downVoteImg.addEventListener('click', (e) => {
    allFetch(`/votes/${data.id}/vote`, { voteType: 'down' })
      .then((result) => {
        countVote.textContent = result.data.totalVote;
      });
  });

  const timeUserPost = createElement('div', 'time-user-post', postDetails);
  const postedUser = createElement('p', '', timeUserPost);
  postedUser.textContent = 'Posted By ';
  const userName = createElement('span', 'name-user', postedUser);
  userName.textContent = data.username;
  userName.addEventListener('click', () => {
    location.href = `/profile/${data.username}`;
    localStorage.setItem('username-post', JSON.stringify(data.username));
  });
  const timePosted = createElement('p', 'time', timeUserPost);
  timePosted.textContent = getTimeSincePost(data.created_at);
  timePosted.title = `${new Date(data.created_at)}`;

  const titlePost = createElement('div', 'title-post', postDetails);
  const title = createElement('h3', 'title', titlePost);
  title.textContent = data.title;

  const bodyPost = createElement('div', 'body-post', postDetails);
  const body = createElement('p', '', bodyPost);
  body.textContent = data.content_post;

  const imgPost = createElement('div', 'image-post', postDetails);
  const imgUrl = createElement('img', '', imgPost);
  if (data.image_url === '') {
    imgPost.textContent = '';
  } else {
    imgUrl.src = data.image_url;
  }
  const commentsEditDelete = createElement(
    'div',
    'comments-edit-delete',
    postDetails,
  );
  const commentsMain = createElement('div', 'comments', commentsEditDelete);
  const commentIcon = createElement('lord-icon', '', commentsMain);
  commentIcon.src = 'https://cdn.lordicon.com/hpivxauj.json';
  commentIcon.setAttribute('trigger', 'hover');

  const countComments = createElement('span', 'count', commentsMain);
  countComments.textContent = data.comments_count;

  commentsMain.addEventListener('click', () => {
    if (allComments.textContent == '') {
      fetchData(`/comments/${data.id}`).then((result) => {
        allComments.textContent = '';
        result.comments.forEach((comment) => {
          createCommentsContent(allComments, comment, countComments);
        });
      });
    } else {
      allComments.textContent = '';
    }
  });

  const commentText = createElement('p', '', commentsMain);
  commentText.textContent = 'Comments';
  if (data.username === userData.username) {
    const editMain = createElement('div', 'edit', commentsEditDelete);

    const editIcon = createElement('img', '', editMain);
    editIcon.src = '../img/edit.png';
    const editText = createElement('p', '', editMain);
    editText.textContent = 'Edit';
    editMain.addEventListener('click', () => {
      if (data.username === userData.username) {
        location.href = `/editPost/${data.id}`;
      }
    });
  }

  if (data.username === userData.username) {
    const deleteMain = createElement('div', 'delete', commentsEditDelete);

    const deleteIcon = createElement('lord-icon', '', deleteMain);
    deleteIcon.src = 'https://cdn.lordicon.com/kfzfxczd.json';
    deleteIcon.setAttribute('trigger', 'hover');
    deleteMain.addEventListener('click', () => {
      if (data.username === userData.username) {
        deleteFetch(`/delete/${data.id}`);
        createPost.remove();
      }
    });

    const deleteText = createElement('p', '', deleteMain);
    deleteText.textContent = 'Delete';
  }
  const commentsContainer = createElement('div', 'comment-container', postDetails);
  const commentsText = createElement('textarea', '', commentsContainer);
  commentsText.setAttribute('name', 'comment');
  commentsText.setAttribute('placeholder', 'Enter Your Comment');

  commentIconDiv = createElement('div', 'mainCommentIcon', commentsContainer);
  commentSubmit = createElement('img', 'comment-submit', commentIconDiv);
  commentSubmit.src = '../img/sendComment.png';
  commentSubmit.addEventListener('click', () => {
    if (commentsText.value !== '') {
      allFetch('/comments', { comment: commentsText.value, postId: data.id })
        .then((allCommentsData) => {
          createCommentsContent(allComments, allCommentsData.comments, countComments);
        });
      commentsText.value = '';
      validationComment.textContent = '';
      countComments.textContent = +countComments.textContent + 1;
    } else {
      validationComment.textContent = 'Comment Is Required';
      validationComment.style.color = 'red';
    }
  });

  const validationComment = createElement('span', 'validationComment', postDetails);
  const allComments = createElement('div', 'all-comment', postDetails);
  allComments.id = `commentsAll-${data.id}`;
};

const createPost = (allData) => {
  postsContainer.innerHTML = '';
  allData.result.forEach((data) => {
    createDom(data);
  });
};

const filterPost = (allData) => {
  postsContainer.innerHTML = '';
  createDom(allData);
};

function getTimeSincePost(createdAt) {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const milliseconds = now.getTime() - createdAtDate.getTime();

  if (milliseconds < 0) {
    return 'Just now';
  }

  const days = Math.floor(milliseconds / 86400000);
  const hours = Math.floor((milliseconds % 86400000) / 3600000);
  const minutes = Math.floor(((milliseconds % 86400000) % 3600000) / 60000);
  const seconds = Math.floor((((milliseconds % 86400000) % 3600000) % 60000) / 1000);

  if (days > 0) {
    return `${days} days ago`;
  } if (hours > 0) {
    return `${hours} hours ago`;
  } if (minutes > 0) {
    return `${minutes} minutes ago`;
  } if (milliseconds < 60000) {
    return `${seconds} seconds ago`;
  }
  return 'Just now';
}
