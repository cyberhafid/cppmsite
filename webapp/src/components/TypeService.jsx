 
import axios from 'axios';

export class LevelService {


  getTyope() {
    return  axios
    .get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
  )
.then(res => res.data);
 }
 getUserddds() {
  return  axios
  .get('http://marc.in2p3.fr:8080/api/v0/services',   {headers:("Access-Control-Allow-Methods: GET")}
)
.then(res => res.data);
}



async getUsersff() {
  await axios.get("http://localhost:5000/indice/leveltrihouse"
  ,   )
    .then(res => {
      const persons = res.data;
     // this.setState({ persons });
     // console.log(persons);
    })
     // console.log(persons);
}


async getUsers() {
   return  await axios
  .get('http://localhost:5000/indice/leveltrihouse')
.then(res => res.data.aggregations.process.buckets)
.catch((error) => {console.log('heeeere',error);})
;
}






    getUserskk() {
      axios
    .get('http://opendata.nicecotedazur.org/data/storage/f/2014-06-06T12%3A26%3A02.912Z/sign-ig-ig-base-localisation.json',
    {headers:("Access-Control-Allow-Methods: GET")}
  )
  
.then(res => res.data.docs)
.catch((error) => {console.log('heeeere',error);})
 }



    getMaraudes() {
        return  axios
        .get('http://localhost:3000/maraudes', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.maraudes);
     }

     getParticipants() {
        return  axios
        .get('http://localhost:3000/participants', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.participants);
     }
     getPictures() {
        return  axios
        .get('http://localhost:3000/pictures', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.participants);
     }



}


