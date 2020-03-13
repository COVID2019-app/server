require('dotenv').config()
const knex = require('knex');

const knexfile = require('../knexfile');

const DB_URL = process.env.DB_URL
const HOME_URL = process.env.HOME_URL

const envi = process.env.NODE_ENV || 'development';
const configOptions = knexfile[envi];

module.exports = knex(configOptions);