const db = require('../db')
module.exports = {
    getState,
    getStateById,
    getByCountryId,
    updateState,
    addState,
    deleteState,
}

function getState(){
    return db('state_table')
    .orderBy('state_name','desc')

}

function getStateById(Id){
    return db('state_table')
    .orderBy('state_name','desc')
     .where('state_id' ,'=',Id)
}
function getByCountryId(country_id){
    return db('state_table')
    .orderBy('state_name','desc')
     .where({ country_id })
}

function updateState(Update,Id){
    return db('state_table')
            .update(Update)
            .where('state_id','=',Id)
            .orderBy('state_name','desc')
}

function addState(data){
    return db('state_table')
            .insert(data,'state_id')
            
}

function deleteState(Id){
    return db('state_table')
    .where("state_id","=", Id)
    .truncate()
    .delete()

}