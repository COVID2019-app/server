// const fs = require('fs')
// const file = require('./data.json')

// module.exports = () =>{
// let data = []
// let arr = []
// let i = 2
//  file.map(item =>{
//   data = {
//       country_id: i++,
//       country_name:item.rec_territory,
//       confirmed_cases:item.cases,
//       deaths:item.deaths,
//       recovered:item.recovered,
//       severe_critical:item.severe,
//       tested:item.tested,
//       active_cases:item.active
//   }
//   arr.push(data)
//  })
// fs.writeFile('country.json',JSON.stringify(arr),function (err) {
//     if (err) throw err;
//     console.log("FINISHED")
// })

// }