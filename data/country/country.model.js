const db = require('../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    getDataId
}

function getData(category){
    return db('country_table')
        .orderBy(category,'desc')
}
function getDataId(id){
    return db('country_table')
    .where('country_id','=',id)
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
