

require('dotenv')
  module.exports = {
    development: {
    client:'pg',
  
      connection:'postgres://vjmhncbkrwkusk:d19ac8096c2cfe392219f8270c020c7f8a6699aadf6bf215374272cea27c3d50@ec2-52-6-143-153.compute-1.amazonaws.com:5432/dammqobvkc7j9j?ssl=true',
    
      

 
   
      },
  
      migrations: {
        directory: './data/migrations',
        
      },
      seeds: {
        directory: './data/seeds',
      },
      production: {
        client:'pg',
      
          connection:'postgres://vjmhncbkrwkusk:d19ac8096c2cfe392219f8270c020c7f8a6699aadf6bf215374272cea27c3d50@ec2-52-6-143-153.compute-1.amazonaws.com:5432/dammqobvkc7j9j?ssl=true',
          
    
     
       
          },
      
          migrations: {
            directory: './data/migrations',
            
          },
          seeds: {
            directory: './data/seeds',
          },
    }
  
