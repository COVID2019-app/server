const db = require('../db')

module.exports ={
    postData,
    getData
}

function postData(data){
    return db('updates')
    .insert(data,'id')
}

function getData(){
    return db('updates')
    .orderBy('Last_Update','desc')
}