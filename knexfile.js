//require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    rejectUnauthorized: false
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
