const db = require('../db')
module.exports={
    getAllData,
     getByCountry,
     getByDate,
    // updateData,
    // postData
}

function getAllData(){
    return db('time_series')
   
    .orderBy('country','asc')
}



function getByCountry(iso){
   
  return db('time_series')
  .join('countryInfo','time_series.country','countryInfo.country')
  .select(
          'time_series.country',
          'time_series.province',
           'time_series.timeline',
          'countryInfo.iso3'
          )
   .where('countryInfo.iso3','=',iso)
    
 
    }


function getByDate(date){
    
    return db('time_series')
    .select('date','cases','recovered','deaths','country')
    .where({ date })
    .orderBy('date','asc')
 
  
}
function addData(data){
    return db('time_series')
        .insert(data)
}