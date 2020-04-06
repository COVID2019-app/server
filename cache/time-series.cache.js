const  NodeCache = require('node-cache');



  const cache = new NodeCache({
    checkperiod: 60,
    maxKeys: 10000,
    stdTTL: 60,
    useClones: false,
  });
  
module.exports=  cache

