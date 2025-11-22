const express = require('express');
const router = express.Router();
const apyController = require('../controllers/apyController');

router.get('/pools', apyController.getAPY);

module.exports = router;
