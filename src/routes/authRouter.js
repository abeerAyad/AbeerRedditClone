const { Router } = require('express');
const { authSignupUser } = require('../controllers');

const authRouter = Router();
authRouter.post('/signup', authSignupUser);

module.exports = authRouter;
