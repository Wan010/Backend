const axios = require('axios');

module.exports = {
  getAPYPools: async () => {
    const url = 'https://yields.llama.fi/pools';
    const res = await axios.get(url);
    return res.data.data || [];
  }
};
