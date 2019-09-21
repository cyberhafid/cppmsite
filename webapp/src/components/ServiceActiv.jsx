 
import axios from 'axios';

export class ServiceActiv {


async getServices() {
   return  await axios
  .get('http://localhost:5000/indice/servicestrihouse')
.then(res => res.data.aggregations.process.buckets)
.catch((error) => {console.log('heeeere',error);})
;
}


async getLogServices() {
  return  await axios
 .get('http://localhost:5000/indice/serviceall')
.then(res => res.data.hits.hits)
.catch((error) => {console.log('heeeere',error);})
;
}






}


