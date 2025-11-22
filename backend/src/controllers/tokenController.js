const moralis = require('../services/moralisService');

exports.getTokenList = async (req, res) => {
  try {
    const { address } = req.params;
    const tokens = await moralis.getErc20Balances(address);
    res.json(tokens);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching tokens' });
  }
};

exports.getTokenPrice = async (req, res) => {
  try {
    const { tokenAddress } = req.params;
    const price = await moralis.getTokenPrice(tokenAddress);
    res.json(price);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching token price' });
  }
};
