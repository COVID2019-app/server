const db = require('../../data/db')

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}

function getData(username){
    return db('users')
    .where({username})
           
        
}

function postData(data){
    return db('users')
    .insert(data)
}

function updateData(user_id, updates) {
    return db("users")
      .where({ user_id })
      .update(updates).orderBy(user_id)
  }
  
  function deleteData(user_id) {
    return db("users")
      .where({ user_id })
      .truncate()
      .delete()
  }
