const db = require('../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(){
    return db('daily')
    .innerJoin('regions_iso','daily.country',"regions_iso.iso_code")
    .select('daily.*','regions_iso.country_name')
    .orderBy('country')
}

function postData(data){
    return db('daily_confirmed')
    .insert(data,'daily_id')
}

function updateData(daily_id, updates) {
    return db("daily_confirmed")
      .where({ daily_id })
      .update(updates).orderBy("daily_id")
  }
  
  function deleteData(daily_id) {
    return db("daily_confirmed")
      .where({ daily_id })
      .truncate()
      .delete()
  }