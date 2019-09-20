 
import axios from 'axios';

export class LevelService {


    getUsers() {
        return  axios
        .get('http://localhost:3000/users', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.users);
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
