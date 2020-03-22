//require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    rejectUnauthorized: false
  },
  production: {
    client: 'pg',
    connection: process.env.DATBASE_URL
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
