exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('country_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('country_table').insert([
        {
          country_name: 'China',
          confirmed_cases: 80894,
          deaths: 3237,
          recovered: 69601,
          severe_critical: 2622,
          tested: 0,
          active_cases: 8056
        }
      ]);
    });
};
