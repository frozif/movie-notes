

function ServerApi() {

  return {
   startApi(){

  return   fetch('http://localhost:3001/movie')
      .then(res => res.json())
      },

    addApi(movieData) {
        return       fetch('http://localhost:3001/movie', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(    
       {     ...movieData,
        id: Date.now()}
      )
    }).then(res => res.json());
    },

    redactApi(id, movieData) {
    return fetch(`http://localhost:3001/movie/${id}`, {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(movieData)
    }).then(res => res.json());
    },

    deleteApi(id) {
                return         fetch(`http://localhost:3001/movie/${id}`, {
           method: 'DELETE',
           headers: {'Content-Type': 'application/json'},
         }).then(res => res.json());
    }
  };
}





export default  ServerApi