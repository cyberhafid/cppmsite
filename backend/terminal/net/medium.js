//https://medium.com/terragoneng/elastic-search-index-and-mapping-in-node-js-97d8f480e3c7

const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping((error) => {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } console.log('All is well');
  });
function checkIndices() {
    client.indices.exists({index: 'scotch.io-tutorial'}, (err, res, status) => {
        if (res) {
            console.log('index already exists');
        } else {
          client.indices.create( {index: 'users'}, (err, res, status) => {
            console.log(err, res, status);
        })
      }
        
    })
}

async function getUsers() {
    await client.search({
        index: 'scotch.io-tutorial',
        type: 'text',
        body: {
          query: {
            match: {
              body: 'hafid'
            }
          }
        }
    })
    .then(res => console.log(res, res))
    .catch(err => console.log(err));
};



async function getTown() {

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

await client.bulk({body:bulk}, function( err, response  ){ 
         if( err ){ 
             console.log("Failed Bulk operation".red, err) 
         } else { 
             console.log("Successfully imported %s".green, cities.length); 
         } 
}); 



}







async function putMapping () {
    console.log("Creating Mapping index");
    client.indices.putMapping({
        index: 'users',
        type: 'staff',
        body: {
        properties: { 
            firstname: { type: 'text' },
            lastname: { type: 'text' },
            email: { type: 'text' },
            phone_number: { type: 'text' },
            created_on: { type: 'date' },
            updated_at: { type: 'date' } }
        }
    }, (err,resp, status) => {
        if (err) {
          console.error(err, status);
        }
        else {
            console.log('Successfully Created Index', status, resp);
        }
    });
}









getTown();
//putMapping();
//checkIndices();
//getUsers();