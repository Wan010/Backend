const defi = require('../services/defiLlamaService');

exports.getAPY = async (req, res) => {
  try {
    const pools = await defi.getAPYPools();
    res.json(pools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching APY data' });
  }
};
