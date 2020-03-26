exports.up = function(knex) {
  return knex.schema.alterTable('country_table', table => {
    table.text('confirmed_cases_link');
    table.text('deaths_link');
    table.text('recovered_link');
    table.text('severe_critical_link');
    table.text('tested_link');
  });
};

exports.down = function(knex) {
  return knex.schema.table('country_table', table => {
    table.dropColumn('confirmed_cases_link');
    table.dropColumn('deaths_link');
    table.dropColumn('recovered_link');
    table.dropColumn('severe_critical_link');
    table.dropColumn('tested_link');
  });
};
