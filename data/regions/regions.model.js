const db = require('../db')
const jdb = require('../db')
module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    joinData,
    joinCountryByDate,
    getRegionSum,
}

function getData(){
    return db('regions_table')
    .orderBy('regions_name')
}
function getRegionSum(id) {
    return db('regions_table')
        .select('regions_name')
        .sum('cases as cases')
        .sum('deaths as deaths')
        .sum('recovered as recovered')
        .from('regions_table')
        .where('country_id', '=', id)
        .groupBy('regions_name')
        .orderBy('cases', 'desc');
}

function joinData(id){
    return db("regions_table")
     .where("regions_table.country_id", "=", id)
      .select("*")
      .orderBy('date_of_case', 'asc');
    
}
<<<<<<< HEAD
function joinData(country_id){
    return db('regions_table')
    .join('country_table','country_table.country_id','regions_table.country_id')
    .where({country_id:country_id})
    .select("*")
=======

function joinCountryByDate(id,date){
    return db('regions_table')
      .join(
        'country_table',
        'country_table.country_id',
        'regions_table.country_id'
      )
      
      .where('regions_table.country_id', '=', id)
      .where('regions_table.date_of_case', '=', date)
   
      .select(
        'regions_table.regions_id as regions_id',
        'regions_table.cases as daily_cases',
        'regions_table.deaths as daily_deaths',
        'regions_table.recovered as daily_recovered',
        'regions_table.country_id as country_id',
        'regions_table.regions_name as regions_name',
        'regions_table.date_of_case as date_of_case',
        'country_table.country as country',
         
      )
      .innerJoin('regions_iso','country_table.country','regions_iso.country')
      .select("regions_table.*",'regions_iso.iso_code')
>>>>>>> staging
    
}
function postData(data){
    return db('regions_table')
    .insert(data,'regions_id')
}

function updateData(regions_id, updates) {
    return db("regions_table")
      .where({ regions_id })
      .update(updates).orderBy("regions_id")
  }
  
  function deleteData(regions_id) {
    return db("regions_table")
      .where({ regions_id })
      .truncate()
      .delete()
  }


