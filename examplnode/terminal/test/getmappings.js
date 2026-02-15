var client = require('./connection.js');

client.indices.getMapping({  
    index: 'gov',
    type: 'petitions',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log('Mappings:\n',response.gov.mappings.petitions.properties);
    }
});