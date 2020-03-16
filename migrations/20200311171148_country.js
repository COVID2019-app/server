
exports.up = function(knex,Promise) {
  return knex.schema.createTable('country_table',tbl =>{
      tbl.increments("country_id");
      tbl.text('country_name').unique().notNull();
      tbl.integer('confirmed_cases');
      tbl.integer('deaths');
      tbl.integer('recovered');
      tbl.integer('severe_critical');
      tbl.integer('tested');
      tbl.integer('active_cases');
  })
  .createTable('regions_table',tbl =>{
      tbl.increments("regions_id");
      tbl.integer("country_id")
            .references("country_id")
            .inTable("country_table")
            .unsigned()
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
     tbl.string('regions_name')
     tbl.date('date_of_case')
     tbl.integer('confirmed_cases')
     tbl.integer('deaths')

  })
  .createTable('state_table',tbl =>{
      tbl.increments("state_id");
      tbl.string('name')
      tbl.integer('country_id')
        .references("country_id")
        .inTable("country_table")
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")



  })
  .createTable('daily_confirmed',tbl =>{
      tbl.increments('daily_id')
      tbl.integer('state_id')
        .unsigned()
        .references('state_id')
        .inTable('state_table')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl.integer('country_id')
        .unsigned()
        .references('country_id')
        .inTable('country_table')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl.integer('regions_id')
        .unsigned('')
        .references('regions_id')
        .inTable('regions_table')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
     tbl.date('date')
     tbl.integer('total_confirmed_cases')
     tbl.integer('new_recovered')
     tbl.integer('total_deaths')
     tbl.integer('total_severe_case')
     tbl.integer('total_critical_case')


  })
};

exports.down = function(knex,Promise) {
    return knex.schema
    .dropTableIfExists('daily_confirmed')
    .dropTableIfExists('state_table')
    .dropTableIfExists('regions_table')
    .dropTableIfExists('country_table')
  

  
};
