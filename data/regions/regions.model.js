const db = require('../db')
const jdb = require('../db')
module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    joinData
}

function getData(){
    return db('regions_table')
    .orderBy('regions_name')


    
   
}
function joinData(country_id){
    return db('regions_table')
    .join('country_table','country_table.country_id','regions_table.country_id')
    .where({country_id:country_id})
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
