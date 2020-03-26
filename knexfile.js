
require('dotenv').config({path:__dirname+'/.env'})
const DATABASE_URL = process.env.DATABASE_URL
  module.exports = {
    development: {
    client:'pg',
  
      connection: DATABASE_URL
    
      

 
   
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
  
