<<<<<<< HEAD



  module.exports = {
    development: {
    client:'pg',
  
      connection:process.env.DATABASE_URL,
    
      

 
   
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
  
=======
require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    rejectUnauthorized: false
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
>>>>>>> be18d3ba344c23a84326ea017b9c0a2ea2bef361
