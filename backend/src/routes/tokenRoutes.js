const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.get('/:address', tokenController.getTokenList);
router.get('/price/:tokenAddress', tokenController.getTokenPrice);

module.exports = router;
