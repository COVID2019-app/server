const db = require('../db')
const jdb = require('../db')
module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(){
    return db('regions_table')
    .orderBy('regions_name')


    
   
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
