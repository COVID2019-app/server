require('dotenv')
const dbUrl = process.env.DB_URL
console.log(dbUrl)
  module.exports = {
    development: {
    client:'pg',
  
      connection:dbUrl,
      

 
   
      },
  
      migrations: {
        directory: './data/migrations',
        
      },
      seeds: {
        directory: './data/seeds',
      },
      production: {
        client:'pg',
      
          connection:process.env.DB_URL,
          
    
     
       
          },
      
          migrations: {
            directory: './data/migrations',
            
          },
          seeds: {
            directory: './data/seeds',
          },
    }
  
