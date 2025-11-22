const moralis = require('../services/moralisService');

exports.getBalances = async (req, res) => {
  try {
    const { address } = req.params;
    const chain = req.query.chain || 'eth';
    const erc20 = await moralis.getErc20Balances(address, chain);
    const native = await moralis.getNativeBalance(address, chain);

    res.json({ native, erc20 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching balances' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { address } = req.params;
    const chain = req.query.chain || 'eth';
    const txns = await moralis.getTransactions(address, chain);
    res.json(txns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};
