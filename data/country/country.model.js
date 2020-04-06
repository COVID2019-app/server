const db = require('../db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    getDataId,
    updateAll,
    getIso,
   
    

}

function getIso(){
    return db('regions_iso')
            .orderBy('country',"asc")
}
async function  updateAll(updates){
     return  db('country_table')
            .where('country_id','=',updates.country_id)
            .update({ updates  })
     
}

function getData(category){
    return db('country_table')
         .join('countryInfo','country_table.country','countryInfo.country')
         .select('country_table.*','countryInfo.*')
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
