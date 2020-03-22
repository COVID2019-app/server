require('dotenv').config();
const knex = require('knex');

const knexfile = require('../knexfile');

const envi = process.env.NODE_ENV || 'development';
const configOptions = knexfile[envi];

module.exports = knex(configOptions);
