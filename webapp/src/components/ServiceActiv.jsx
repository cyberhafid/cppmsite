 
import axios from 'axios';

export class ServiceActiv {


   getServices() {
   return  axios
  .get('http://marc.in2p3.fr:8080/api/v0/services',  )
  .then(res => res.data);
   }


 getLogServices() {
   const league= 'WorkloadManagement/SiteDirectorBiomed-1';
  return  axios
 .get(`http://marc.in2p3.fr:8080/api/v0/msgs/${league}`  )
.then(res => res.data);
 }

 getLogServiceggs() {
  return  axios
 .get('http://marc.in2p3.fr:8080/api/v0/msgs/WorkloadManagement/SiteDirectorBiomed-1'  )
.then(res => res.data);
 }






}


