//require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@react-frontend.cpoid8l3wfgy.us-west-2.rds.amazonaws.com:5432/react_frontend?ssl=true',
    rejectUnauthorized: false
  },
  production: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@react-frontend.cpoid8l3wfgy.us-west-2.rds.amazonaws.com:5432/react_frontend'
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
