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

async function getByCountry(name){
    console.log(name)
     db('time_series as t')
        .select(
            't.country',
         't.cases',
         't.active',
          )
        .where('t.country','=',name)
 
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