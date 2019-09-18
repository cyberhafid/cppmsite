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

module.exports = router;

