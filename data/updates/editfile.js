const fs = require('fs')
const data = require('./data.json')

const formated = []

formated.push(Object.values(data))


fs.writeFile('formated.js',JSON.stringify(formated),function(err) {
    if (err) throw err
    console.log('FINISHED')
})