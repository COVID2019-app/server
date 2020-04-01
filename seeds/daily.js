
exports.seed = function(knex) {
  console.log('STARTED SEED')
  const file = require('../bin/daily.js')
  const fs = require('fs')

  console.log(file)
  // Deletes ALL existing entries
  return knex('daily').del()
    .then(function () {
      // Inserts seed entries
      return knex('daily').insert(
      file    );
    }, console.log("FINISHED SEED"));
   
};
