
const fs = require('fs')

const db = require('../data/db.js')
const moment = require('moment')
// const addDaily = require('../data/daily/daily.model.js')
const file = require('./dist/data.json')
let data = []
let arr = []
// let i = 2
async function modify(err,undefined,next) {
  console.log("started Modify")
await file.map(item =>{
    
  data = {
      created_at:moment().calendar(),
      active:item.active,
      cases:item.cases,
      deaths:item.deaths,
      recovered:item.recovered,
      population:item.population, 
      coordinates:item.coordinates,
      tested:item.tested,
      country:item.country,
      county:item.county,
      aggregate:item.aggregate,
      city:item.city,
      featureId:item.featureId,
  
      state:item.state,
      tz:item.tz,
      url:item.url
  }
 arr.push(JSON.stringify(data))

})
await fs.writeFile('daily.js',`module.exports = [${arr}]`,function (err) {

  if (err) throw err;
  console.log('OK')

});
 console.log("FINISHED Modify")
}

module.exports = modify()
