var elasticsearch = require('elasticsearch');
var express = require('express');  
var router = express.Router();
var elastic = new elasticsearch.Client({  
 // host: 'localhost:9200',
 // host: ['http://elastic:cppmcppm@127.0.0.1:9200/'],
   host: ['http://127.0.0.1:9200/'],
  log: 'info'
});


//var elastic = require('../client');

/* GET suggestions */
router.get('/', function (req, res, next) {  
  elastic.search(req.params.input).then(function (result) { res.json(result) });
});


/* POST document to be indexed */
router.post('/test', function (req, res, next) {  
  elastic.addDocument(req.body).then(function (result) { res.json(result) });
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
  elastic.search({index:'hafidsquid-2019.08.24',  body:body})
  .then(results => {
    res.send(results.hits.hits);
  })
  .catch(err=>{
    console.log(err)
    res.send([]);
  });

})




module.exports = router;

