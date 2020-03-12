const db = require('../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(){
    return db('country_table')
    .orderBy('country_name')
}

function postData(data){
    return db('country_table')
    .insert(data,'id')
}

function updateData(id, updates) {
    return db("country_table")
      .where({ id })
      .update(updates).orderBy("id")
  }
  
  function deleteData(id) {
    return db("country_table")
      .where({ id })
      .truncate()
      .delete()
  }