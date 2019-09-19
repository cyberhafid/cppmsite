var elasticsearch = require('elasticsearch');
var express = require('express');  
var router = express.Router();
var elastic = new elasticsearch.Client({  
 // host: 'localhost:9200',
 host: ['http://elastic:cppmcppm@127.0.0.1:9200/'],
   //host: ['http://127.0.0.1:9200/'],
  log: 'trace'
});


//var elastic = require('../client');

/* GET suggestions */
router.get('/', function (req, res, next) {  
  elastic.search(req.params.input).then(function (result) { res.json(result) });
});



router.get('/search', function (req, res){

  function isEmpty(obj) {
    return !Object.keys(obj).length > 0;
  }


  let searchString = 'd';
  let searchType = 'd';

  // Prepare the request body.
  const body = {
    size: 100,
  };
  if (!isEmpty(req.query, 'search') || !isEmpty(req.query, 'type')) {
    const query = {
      bool: {},
    };

    if (!isEmpty(req.query, 'search')) {
      query.bool.must = {
        multi_match: {
          fields: [
            'title^2',
            'summary',
          ],
          query: req.query.search,
          fuzziness: 'auto',
        },
      };
      searchString = req.query.search;
    }

    if (!isEmpty(req.query, 'type')) {
      query.bool.filter = [
        {
          term: {
            type: req.query.type,
          },
        },
      ];
      searchType = req.query.type;
    }

    body.query = query;
  }

  // Add a type facet.
  body.aggs = {
    type: {
      terms: {
        field: 'type',
      },
    },
  };


  elastic.search({
    index: 'france-grille-dirac-logs-workloadmanagement-optimizationmind-2019.09.17',
    body,
  }).then((resp) => {
    // Render results in a template.
    res.render('index', {
      hits: resp.hits.hits,
      total: resp.hits.total,
      aggregations: resp.aggregations.type.buckets,
      searchString,
      searchType,
    });
  }, (err) => {
    console.trace(err.message);
  });


})

router.get('/doudou', function (req, res, next) {  
  elastic.search(
    {index: 'france-grille-dirac-logs-workloadmanagement-optimizationmind-2019.09.17' }

  ).then(function (result) { res.json(result) });
});


router.get('/new', function (req, res){
  // declare the query object to search elastic search and return only 200 results from the first result found. 
  // also match any data where the name is like the query string sent in
  elastic.search({
    index: 'france-grille-dirac-logs-workloadmanagement-optimizationmind-2019.09.17',

  }).then((resp) => {
    // Render results in a template.
    res.render('index', {
      hits: resp.hits.hits,
      total: resp.hits.total,
      aggregations: resp.aggregations.type.buckets,
      searchString,
      searchType,
    });
  }, (err) => {
    console.trace(err.message);
  });


});


router.get('/neww', function (req, res){
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
  elastic.search({index:'france-grille-dirac-logs-workloadmanagement-optimizationmind-2019.09.17',  body:body})
  .then(results => {
    res.send(results.hits.hits);
  })
  .catch(err=>{
    console.log(err)
    
    res.send([]);
  });

})






module.exports = router;

