const db = require('../db')

module.exports ={
    postData,
    getData,
    getMany,
    getAll,
}

function getAll(regions_iso){
    return db('time_series')
    .where('country','=',regions_iso)
    .orderBy('date')
}
function postData(data){
    return db('latest_home_data')
    .insert(data,'id')
}
function getMany(){
    return db('latest_home_data')

}
function getData(){
    return db('latest_home_data')
            .join('country_table',
                 'country_table.country',
                    'latest_home_data.rec_territory')
                    .where('latest_home_data.rec_territory','=','country_table.country')
                     .select(
                        'latest_home_data.rec_territory as country',
                        'latest_home_data.cases as cases',
                        'latest_home_data.deaths as deaths',
                        'latest_home_data.recovered as recovered',
                        'latest_home_data.severe as severe_critical',
                        'latest_home_data.tested as tested',
                        'latest_home_data.active as active_cases',

                        )
 
}