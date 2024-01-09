const { Router } = require('express');
const { registration } = require('../controllers/user-controllers');
const registrationValidation = require('../middlewares/registration-middleware');

const userRouter = Router();

userRouter.post('/registration', registrationValidation, registration);

module.exports = userRouter;