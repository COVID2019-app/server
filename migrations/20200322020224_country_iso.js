
exports.up = function(knex) {
    return knex.schema
       .createTable('regions_table',tbl =>{
        tbl.increments("regions_id");
        tbl.integer("country_id")
          
       tbl.string('regions_name')
       tbl.date('date_of_case')
       tbl.integer('confirmed_cases')
       tbl.integer('deaths')
  
});
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('regions_table')
};
