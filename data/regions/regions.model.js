const db = require('../db')
const jdb = require('../db')
module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    joinData,
    joinCountryByDate,
    getRegionData,
    getRegionSum
}

function getData(){
    return db('regions_table')
    .orderBy('regions_name')

}

function getRegionData(country){
    return db('regions_table')
    .select('regions_table.regions_id', 'regions_table.date_of_case', 'regions_table.regions_name', 'regions_table.confirmed_cases', 'regions_table.deaths')
    .from('regions_table')
    .leftJoin('country_table', 'regions_table.country_id', 'country_table.country_id' )
    .select('country_table.country_name')
    .where('country_table.country_name', '=', country)
}
function getRegionSum(country) {
    return db('regions_table')
        .select('regions_name')
        .sum('regions_table.confirmed_cases as confirmed_cases')
        .sum('regions_table.deaths as deaths')
        .from('regions_table')
        .leftJoin('country_table', 'regions_table.country_id', 'country_table.country_id')
        .where('country_table.country_name', '=', country)
        .groupBy('regions_table.regions_name')
}


function joinData(id){
    return db('regions_table')
    .join('country_table','country_table.country_id','regions_table.country_id')
    .where('regions_table.country_id','=',id)
    .select("*")
    
}

function joinCountryByDate(id,date){
    return db('regions_table')
    .join('country_table','country_table.country_id','regions_table.country_id')
     .where('regions_table.country_id','=',id)
     .where('regions_table.date_of_case','=',date)
    .select("*")
    
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

