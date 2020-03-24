//require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://vjmhncbkrwkusk:d19ac8096c2cfe392219f8270c020c7f8a6699aadf6bf215374272cea27c3d50@ec2-52-6-143-153.compute-1.amazonaws.com:5432/dammqobvkc7j9j?ssl=true',
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
