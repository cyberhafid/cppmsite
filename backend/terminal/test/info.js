var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
    console.log("constituencies",resp);
  });

  client.count({index: 'gov',type: 'petitions'},function(err,resp,status) {  
    console.log('petitions',resp);
  });