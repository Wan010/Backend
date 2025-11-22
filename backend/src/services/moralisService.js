const axios = require('axios');
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

const MORALIS_BASE = 'https://deep-index.moralis.io/api/v2';

module.exports = {
  getErc20Balances: async (address, chain='eth') => {
    const url = `${MORALIS_BASE}/${address}/erc20?chain=${chain}`;
    const res = await axios.get(url, { headers: { 'X-API-Key': MORALIS_API_KEY } });
    return res.data;
  },

  getNativeBalance: async (address, chain='eth') => {
    const url = `${MORALIS_BASE}/${address}/balance?chain=${chain}`;
    const res = await axios.get(url, { headers: { 'X-API-Key': MORALIS_API_KEY } });
    return res.data;
  },

  getTransactions: async (address, chain='eth') => {
    const url = `${MORALIS_BASE}/${address}/transactions?chain=${chain}`;
    const res = await axios.get(url, { headers: { 'X-API-Key': MORALIS_API_KEY } });
    return res.data;
  },

  getTokenPrice: async (tokenAddress, chain='eth') => {
    const url = `${MORALIS_BASE}/erc20/${tokenAddress}/price?chain=${chain}`;
    const res = await axios.get(url, { headers: { 'X-API-Key': MORALIS_API_KEY } });
    return res.data;
  }
};
