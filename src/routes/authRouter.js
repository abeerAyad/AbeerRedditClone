const { Router } = require('express');
const { authSignupUser, authLoginUser, getLogin } = require('../controllers');

const authRouter = Router();
authRouter.get('/login', getLogin);
authRouter.post('/signup', authSignupUser);
authRouter.post('/login', authLoginUser);

module.exports = authRouter;
