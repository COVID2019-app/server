
exports.up = function(knex) {
  return  knex.schema.createTable('country_table',tbl => {
  tbl.increments("country_id");
  tbl.text('country_name').unique().notNull();
  tbl.integer('confirmed_cases');
  tbl.integer('deaths');
  tbl.integer('recovered');
  tbl.integer('severe_critical');
  tbl.integer('tested');
  tbl.integer('active_cases');
     
//       tbl.increments("country_id");
//       tbl.text('country_name').unique().notNull();
//       tbl.integer('confirmed_cases');
//       tbl.integer('deaths');
//       tbl.integer('recovered');
//       tbl.integer('severe_critical');
//       tbl.integer('tested');
//       tbl.integer('active_cases');

  })
 }

 exports.down = function(knex) {
//   return knex.schema
//         .dropTableIfExists('country_table')
     
};
