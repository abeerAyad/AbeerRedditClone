const { Router } = require('express');
const {
  getPost,
  showHomePost,
  addPost,
  addNewPost,
  deletePost,
  logout,
  searchPost, addCommentsPost, editPost,
  getEditPost,
  getPostById,
  getCommentsPosts,
  deleteCommentById,

} = require('../controllers');
const { checkAuth, checkAuthRedirect } = require('../middlewares');


const router = Router();

router.get('/post', showHomePost);
router.get('/posts', getPost);
router.post('/search', searchPost);
router.get('/addpost', checkAuthRedirect, addNewPost);
router.get('/editPost/:id', checkAuthRedirect, getEditPost);
router.get('/comments/:id', getCommentsPosts);
router.use(checkAuth);
router.get('/logout', logout);
router.post('/addpost', addPost);
router.put('/editPostData/:id', editPost);
router.get('/getPost/:id', getPostById);
router.delete('/delete/:id', deletePost);
router.post('/comments', addCommentsPost);
router.delete('/deleteComment/:id', deleteCommentById);

module.exports = router;
