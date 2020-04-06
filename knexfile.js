
require('dotenv').config({path:__dirname+'/.env'})
const DATABASE_URL = process.env.DATABASE_URL
const DO_DATABASE_URL = process.env.DO_DATABASE_URL
  module.exports = {
    development: {
    client:'pg',
  
      connection: DO_DATABASE_URL
    
      

 
   
      },
  
      migrations: {
        directory: './data/migrations',
        
      },
      seeds: {
        directory: './data/seeds',
      },
      production: {
        client:'pg',
      
          connection:process.env.DATABASE_URL,
          
    
     
       
          },
      
          migrations: {
            directory: './data/migrations',
            
          },
          seeds: {
            directory: './data/seeds',
          },
    }
  
