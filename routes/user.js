const { Router } = require('express');

const { registrationController } = require('../controllers/user-controllers');
const registrationValidation = require('../middlewares/registration-middleware');

const router = Router();

router.post('/registration', registrationValidation, registrationController);

module.exports = router;