
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usa_regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('usa_regions').insert([
        {'region_name':'new england','iso_code':'ne','confirmed':'127','deaths':'0'},
        {'region_name':'mid atlantic','iso_code':'mid-at','confirmed':'379','deaths':'1'},
        {'region_name':'east north centeral','iso_code':'enc','confirmed':'69','deaths':'0'},
        {'region_name':'west north centeral','iso_code':'wnc','confirmed':'42','deaths':'1'},
        {'region_name':'south america','iso_code':'sa','confirmed':'129','deaths':'2'},
        {'region_name':'east south central','iso_code':'esc','confirmed':'29','deaths':'0'},
        {'region_name':'west south centeral','iso_code':'wsc','confirmed':'45','deaths':'0'},
        {'region_name':'mountain','iso_code':'mount','confirmed':'59','deaths':'0'},
        {'region_name':'pacific','iso_code':'pac','confirmed':'662','deaths':'35'},
        {'region_name':'puerto rico','iso_code':'pr','confirmed':'0','deaths':'0'},
        {'region_name':'repatriated','iso_code':'dp','confirmed':'70','deaths':'0'}
      ]);
    });
};
