const { Router } = require('express');
const {
  getPost, showHomePost, addPost, addNewPost, deletePost,
} = require('../controllers');

const router = Router();

router.get('/post', showHomePost);
router.get('/posts', getPost);
router.get('/addpost', addNewPost);
router.post('/addpost', addPost);
router.delete('/delete/:id', deletePost);

module.exports = router;
