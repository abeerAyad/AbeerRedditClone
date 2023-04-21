const { Router } = require('express');
const {
  getPost,
  showHomePost,
  addPost,
  addNewPost,
  deletePost,
  logout,
  searchPost, addCommentsPost,
} = require('../controllers');
const { checkAuth, checkAuthRedirect } = require('../middlewares');

const router = Router();

router.get('/post', showHomePost);
router.get('/posts', getPost);
router.get('/search', searchPost);
router.get('/addpost', checkAuthRedirect, addNewPost);
router.use(checkAuth);
router.get('/logout', logout);
router.post('/addpost', addPost);
router.delete('/delete/:id', deletePost);
router.post('/comments', addCommentsPost);

module.exports = router;
