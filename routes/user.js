const { Router } = require('express');

const { registration } = require('../controllers/user-controllers');

const router = Router();

router.post('/registration', registration);

module.exports = router;