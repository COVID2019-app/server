const db = require('../../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(){
    return db('usa_regions')
    .orderBy('region_name','desc')
}

function postData(data){
    return db('usa_regions')
    .insert(data,'id')
}

function updateData(id, updates) {
    return db("usa_regions")
      .where({ id })
      .update(updates).orderBy("id")
  }
  
  function deleteData(id) {
    return db("usa_regions")
      .where({ id })
      .truncate()
      .delete()
  }
