
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('regions_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions_table').insert([
        {'regions_name':'new england','country_id':8,'confirmed_cases':'127','deaths':'0','date_of_case':'03/16/2020'},
        {'regions_name':'mid atlantic','country_id':8,'confirmed_cases':'379','deaths':'1','date_of_case':'03/16/2020'},
        {'regions_name':'east north central','country_id':8,'confirmed_cases':'69','deaths':'0','date_of_case':'03/16/2020'},
        {'regions_name':'west north central','country_id':8,'confirmed_cases':'42','deaths':'1','date_of_case':'03/16/2020'},
        {'regions_name':'south america','country_id':8,'confirmed_cases':'129','deaths':'2','date_of_case':'03/16/2020'},
        {'regions_name':'east south central','country_id':8,'confirmed_cases':'29','deaths':'0','date_of_case':'03/16/2020'},
        {'regions_name':'Lombardia','country_id':25,'confirmed_cases':'98','deaths':'0','date_of_case':'03/16/2020'},
      
      
      ]);
    });


};
