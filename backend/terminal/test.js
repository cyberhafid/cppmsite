const elasticsearch = require('elasticsearch');


const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
 });



 client.ping({ requestTimeout: 30000 }, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});






async function run () {
  await client.index({
    index: 'squid-2019.08.23',
    id: '1',
    body: {
      character: 'a',
      quote: 'a.'
    }
  })

  const { body } = await client.exists({
    index: 'squid-2019.08.23',
    id: 1
  })

  console.log(body) // true
}

run().catch(console.log)