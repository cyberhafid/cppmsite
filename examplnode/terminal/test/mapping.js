var client = require('./connection.js');

client.indices.putMapping({  
    index: 'gov',
    type: 'petitions',
    body: {
      properties: {
        'signatures_by_constituency': {
          'type': 'nested',
          properties: {
            'name': {
              'type': 'string',
              'index': 'not_analyzed'
            }
          }
        },
        'signatures_by_country': {
          'type': 'nested',
          properties: {
            'name': {
              'type': 'string',
              'index': 'not_analyzed'
            }
          }
        }
      }
    }
  },function(err,resp){
      if (err) {
        console.log(err);
      }
      else {
        console.log(resp);
      }
  });