<<<<<<< HEAD

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
  
=======
//require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@react-frontend.cpoid8l3wfgy.us-west-2.rds.amazonaws.com:5432/react_frontend',
    rejectUnauthorized: false
  },
  production: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@react-frontend.cpoid8l3wfgy.us-west-2.rds.amazonaws.com:5432/react_frontend'
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
>>>>>>> 8cbfc9f11eeab84f9b7ab1c829a8ef39f766d390
