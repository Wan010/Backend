CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wallets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  address TEXT,
  label TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tokens (
  id SERIAL PRIMARY KEY,
  wallet_id INTEGER REFERENCES wallets(id),
  symbol TEXT,
  token_address TEXT,
  balance NUMERIC,
  decimals INTEGER,
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  wallet_id INTEGER,
  tx_hash TEXT,
  type TEXT,
  amount NUMERIC,
  created_at TIMESTAMP DEFAULT now()
);
