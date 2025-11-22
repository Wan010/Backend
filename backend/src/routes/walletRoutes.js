const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.get('/:address/balances', walletController.getBalances);
router.get('/:address/transactions', walletController.getTransactions);

module.exports = router;
