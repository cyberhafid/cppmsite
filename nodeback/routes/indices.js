var elasticsearch = require('elasticsearch');
var express = require('express');  
var router = express.Router();
var elastic = new elasticsearch.Client({  
 // host: 'localhost:9200',
  //host: ['http://elastic:cppmcppm@127.0.0.1:9200/'],
   host: ['http://127.0.0.1:9200/'],
  log: 'trace'
});


//var elastic = require('../client');

/* GET suggestions */
router.get('/', function (req, res, next) {  
  elastic.search(req.params.input).then(function (result) { res.json(result) });
});


router.get('/service', function (req, res, next) {  
  elastic.search(
   // {index: 'france-grille-dirac-logs*' } filebeat-*
   {index: 'filebeat-*' } 
  ).then(function (result) { res.json(result) });
});


router.get('/levelinfo', function (req, res, next) {  
  let body = {
    size: 200,
    from: 0, 
    query: {
      match: {
        levelname:"INFO"
         // name: req.query['q']
      }
    }
  }
  elastic.search({index:'france-grille-dirac-logs*',  body:body})
.then(function (result) { res.json(result) });
  });


  router.get('/level/:id', function (req, res, next) {  
    let body = {
      size: 200,
      from: 0, 
      query: {
        match: {
           levelname: req.query['id']
                }
              }
    }
    elastic.search({index:'france-grille-dirac-logs*',  body:body})
  .then(function (result) { res.json(result) });
    });


    router.get('/levelinfotemps', function (req, res, next) {  
      let body = {
        size: 2,
        from: 0, 
        query: {
          match: {
            levelname:"INFO"
             // name: req.query['q']
          }
        },
        sort: [
          {
            '@timestamp': {
              order: "desc"
            }
          }
        ]
      }
      elastic.search({index:'france-grille-dirac-logs*',  body:body})
    .then(function (result) { res.json(result) });
      });

      router.get('/leveltri', function (req, res, next) {  
        let body = {
          size: 0,
          aggs: {
             componentname: {
                terms: {
                   field: "componentname.keyword",
                   size: 100
                }
             }
          }
        }
        elastic.search({index:'france-grille-dirac-logs*',  body:body})
      .then(function (result) { res.json(result) });
        });

        router.get('/servicestrihouse', function (req, res, next) {  
          let body = {
            size: 0,
            aggs: {
               process: {
                  terms: {
                     field: "process.name",
                     size: 100
                  }
               }
            }
          }
          elastic.search({index:'filebeat-*',  body:body})
        .then(function (result) { res.json(result) });
          });


          router.get('/serviceall', function (req, res, next) {  
           
            let body = {
              size: 50,
              query: { "match_all": {} },

  _source: ["@timestamp", "message", "name", "process.name"],
            }
                    
            elastic.search(
            // {index: 'france-grille-dirac-logs*' } filebeat-*
             {index: 'filebeat-*',body :body, } 
            ).then(function (result) { res.json(result) });
          });




module.exports = router;

