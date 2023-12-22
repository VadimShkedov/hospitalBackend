const { Router } = require('express');

const { testController } = require('../controllers/testFile-controller');

const router = Router();

router.get('/api', testController);

module.exports = router;