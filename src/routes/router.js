const { Router } = require('express');
const {
  getPost, showHomePost, addPost, addNewPost, deletePost,
} = require('../controllers');
const { checkAuth, checkAuthRedirect } = require('../middlewares');

const router = Router();

router.get('/post', showHomePost);
router.get('/posts', getPost);
router.get('/addpost', checkAuthRedirect, addNewPost);
router.use(checkAuth);
router.post('/addpost', addPost);
router.delete('/delete/:id', deletePost);

module.exports = router;
