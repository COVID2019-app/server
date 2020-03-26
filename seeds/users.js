exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'covid2019editor',
          password: 'eDit0r'
        },
        {
          "username":"covidadmin",
          "password":"eDit0r"
        }
      ]);
    });
};
