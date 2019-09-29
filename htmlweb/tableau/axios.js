
     
     function myFunction() {

   


        const data = axios.get({
          baseURL: 'https://api.github.com/',
          url: "/search/repositories",
          params: {
            sort: 'stars',
            order: 'desc',
            q: 'language:javascript created:>2018-04-15',
          }
        })
      
      
console.log(data)  ;    
  //return items.map(({ id, full_name, html_url, description }) => ({ id, name: full_name, url: html_url, description }));


 
    };