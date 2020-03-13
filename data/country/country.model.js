const db = require('../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(){
    return db('country_table')
    .orderBy('country_id')
}

function postData(data){
    return db('country_table')
    .insert(data,'country_id')
}

function updateData(country_id, updates) {
    return db("country_table")
      .where({ country_id })
      .update(updates).orderBy("country_id")
  }
  
  function deleteData(country_id) {
    return db("country_table")
      .where({ country_id })
      .truncate()
      .delete()
  }
