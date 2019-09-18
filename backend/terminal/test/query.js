var client = require('./connection.js');

client.search({  
  index: 'gov',
  type: 'petitions',
  fields: ['action','signature_count'],
  size: 5,
  body: {
    query: {
      match: { 'action': 'government' }
    },
  }
},function (error, response,status) {
    if (error){
      console.log('search error: '+error)
    }
    else {
      console.log('--- Response ---');
      console.log('Total hits: ',response.hits.total);
      console.log('--- Hits ---');
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});