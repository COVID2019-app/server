const db = require('../db')
module.exports={
    getAllData,
     getByCountry,
     getByDate,
    // updateData,
    // postData
}

function getAllData(){
    return db('time_series as t')
    .join('regions_iso as r','t.country','r.iso_code')
    .select(
        't.*',
        'r.iso_code',
        'r.country')
    .orderBy('t.country','asc')
}

function getByCountry(country){
    return db('time_series as t')
    .join('regions_iso as r','t.country','r.iso_code')

    .select('t.*','r.country','r.iso_code')
    .where('r.iso_code','=',country)

    .orderBy('date','asc')
}
function getByDate(dates){
    
    return db('time_series')
         .where('date','=',dates)

 
  
}
function addData(data){
    return db('time_series')
        .insert(data)
}