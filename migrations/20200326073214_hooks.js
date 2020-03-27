
exports.up = function(knex) {
    return  knex.schema.createTable('updates',tbl => {
        tbl.increments();
        tbl.string('FIPS',10);
        tbl.string('Admin2',60);
        tbl.string('Province_State',60)
        tbl.string('Country_Reason',8)
        tbl.string('Last_Update',70)
        tbl.string('Lat',30)
        tbl.string('Long_',30)
        tbl.string('Confirmed',1000)
        tbl.string('Deaths',1000)
        tbl.string('Recovered',1000)
        tbl.string('Active',1000)
        tbl.string('Combined_Key',1000)
    })
};

exports.down = function(knex) {
return  knex.schema.dropTableIfExists('updates')
};
