


  module.exports = {
    development: {
    client:'pg',
  
      connection:'postgres://kkirxdknqfudhr:3c918d64ec42fe1661df070141f8e30d3991ce04a4ebe82b8acaaab04bb3669c@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d9i8nr6ktbvgi3?ssl=true',
      rejectUnauthorized:false
      

 
   
      },
  
      migrations: {
        directory: './data/migrations',
        
      },
      seeds: {
        directory: './data/seeds',
      },
      production: {
        client:'pg',
      
          connection:'postgres://kkirxdknqfudhr:3c918d64ec42fe1661df070141f8e30d3991ce04a4ebe82b8acaaab04bb3669c@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d9i8nr6ktbvgi3?ssl=true',
          
    
     
       
          },
      
          migrations: {
            directory: './data/migrations',
            
          },
          seeds: {
            directory: './data/seeds',
          },
    }
  
