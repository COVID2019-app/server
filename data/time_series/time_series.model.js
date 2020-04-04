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
    .join('regions_iso','t.country','regions_iso.iso_code')
    .select(
        't.*',
        'regions_iso.iso_code',
        'regions_iso.country as name')
    .orderBy('t.date','asc')
}

function getByCountry(iso){
    console.log(iso)
     db('time_series as t')
     .join('regions_iso','t.country','regions_iso.iso_code')
        .select(
            't.*',
            'regions_iso.country as name',
            'regions_iso.iso_code'
          )
        .where('regions_iso.iso_code','=',iso)
        .orderBy('t.date','asc')
 
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