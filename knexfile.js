


  module.exports = {
    development: {
    client:'pg',
  
      connection:'postgres://postgres:postgres@react-frontend.cpoid8l3wfgy.us-west-2.rds.amazonaws.com:5432/react_frontend',
      

 
   
      },
  
      migrations: {
        directory: './data/migrations',
        
      },
      seeds: {
        directory: './data/seeds',
      },
      production: {
        client:'pg',
      
          connection:process.env.HOME_URL,
          
    
     
       
          },
      
          migrations: {
            directory: './data/migrations',
            
          },
          seeds: {
            directory: './data/seeds',
          },
    }
  
