const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

module.exports.search = function(searchData, callback) {
  client.search({
    index: 'squid-2019.08.24',
    type: 'a',
    body: {
      query: {
        bool: {
          must: {
            match: {
              "newContent": searchData.searchTerm
            }
          }
        }
      }
    }
  }).then(function (resp) {
    callback(resp.hits.hits);
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}