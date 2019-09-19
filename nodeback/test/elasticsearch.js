var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({  
    //host: 'localhost:9200',
    host: ['http://elastic:cppmcppm@127.0.0.1:9200/'],
    log: 'info'
});

var indexName = "randomindex";


function getSuggestions(input) {  
    return elasticClient.suggest({
        index: indexName,
        type: "document",
        body: {
            docsuggest: {
                text: input,
                completion: {
                    field: "suggest",
                    fuzzy: true
                }
            }
        }
    })
}
exports.getSuggestions = getSuggestions;