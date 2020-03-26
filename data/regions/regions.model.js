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

function getRegionData(id){
    return db('regions_table')
    .select('*') 
    .from('regions_table')
    .where('country_id', '=', id)
    .orderBy('date_of_case', 'asc')
}
function getRegionSum(id) {
    return db('regions_table')
        .select('regions_name')
        .sum('confirmed_cases as confirmed_cases')
        .sum('deaths as deaths')
        .from('regions_table')
        .where('country_id', '=', id)
        .groupBy('regions_name')
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
    .select('*',"regions_table.confirmed_cases as daily_confirmed_cases",
                "regions_table.deaths as daily_deaths",
                "regions_table.recovered as daily_recovered"
                )
    
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

