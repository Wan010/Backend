require('dotenv').config();
const express = require('express');
const cors = require('cors');

const walletRoutes = require('./routes/walletRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const apyRoutes = require('./routes/apyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/wallet', walletRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/apy', apyRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
