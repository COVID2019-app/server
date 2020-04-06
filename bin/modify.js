
const fs = require('fs')
const file1 = require('../timeseries6.json')

// const db = require('../data/db.js')
// const moment = require('moment')
// const addDaily = require('../data/daily/daily.model.js')
// const file1 = require('table.json')

JSON.stringify(file1);
// JSON.stringify(file3)
const files =Object.values(file1)
let data = []
let arr = []
let i = 0


async function modify(err,undefined,next) {
  
 await Object.values(files.map(item =>{
 
  data = {
        // id:i++,
      //  created_at:'',
      // ID:item.ID,
      active:item.active,
      cases:item.cases,
      deaths:item.deaths,
      recovered:item.recovered,
      //  population:item.population, 
      // coordinates:item.coordinates,
      tested:item.tested,
      country:item.country,
       county:item.county,
      //  aggregate:item.aggregate,
      //  city:item.city,
      //  featureId:item.featureId,
       date:item.date,
       state:item.state,
      //  tz:item.tz,
      //  growthFactor:item.growthFactor,

      // url:item.url
     
  }
   
  arr.push(JSON.stringify(data))

 }))
 await fs.writeFile('data.js',`module.exports = [${arr}]`,function (err) {

   if (err) throw err;
   console.log('OK')

 });
  console.log("FINISHED Modify")
}

 module.exports = modify()
