const { Router } = require('express');

const { registration } = require('../controllers/user-controllers');
const registrationValidation = require('../middlewares/registration-middleware');

const router = Router();

router.post('/registration', registrationValidation, registration);

module.exports = router;