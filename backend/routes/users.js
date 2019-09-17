const elasticsearch = require('elasticsearch');

var express = require('express');
var router = express.Router();
const client = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});






/* GET users listing. */
router.get('/indice', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/', function (req, res){
  client.indices.exists({index: 'scotch.io-tutorial'}, (err, res, status) => {
      if (res) {
          console.log('index already exists');
          
      } else {
        client.indices.create( {index: 'users'}, (err, res, status) => {
          console.log(err, res, status);
          res.send([]);
      })
    }
      
  })
});



router.get('/search', function (req, res){
  // declare the query object to search elastic search and return only 200 results from the first result found. 
  // also match any data where the name is like the query string sent in
  let body = {
    size: 200,
    from: 0, 
    query: {
      match: {
          name: req.query['q']
      }
    }
  }
  // perform the actual search passing in the index, the search query and the type
  client.search({index:'scotch.io-tutorial',  body:body, type:'cities_list'})
  .then(results => {
    res.send(results.hits.hits);
  })
  .catch(err=>{
    console.log(err)
    res.send([]);
  });

})






  router.get('/town', function (req, res) {

  const cities = require('./cities.json');
  // declare an empty array called bulk
  var bulk = [];
  //loop through each city and create and push two objects into the array in each loop
  //first object sends the index and type you will be saving the data as
  //second object is the data you want to index
  cities.forEach(city =>{
     bulk.push({index:{ 
                   _index:"scotch.io-tutorial", 
                   _type:"cities_list",
               }          
           })
    bulk.push(city)
  })
  //perform bulk indexing of the data passed

 client.bulk({body:bulk}, function( err, response  ){ 
       if( err ){ 
           console.log("Failed Bulk operation".red, err) 
       } else { 
           console.log("Successfully imported %s".green, cities.length); 
       } 
}); 



});





module.exports = router;
