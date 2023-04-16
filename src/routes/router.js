const { Router } = require('express');
const { getPost, showHomePost } = require('../controllers');

const router = Router();

router.get('/post', showHomePost);
router.get('/posts', getPost);

module.exports = router;
