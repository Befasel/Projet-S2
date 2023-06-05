import PocketBase from 'pocketbase' ;
import axios from 'axios';
const pb = new PocketBase ('http://127.0.0.1:8090') ;
const axios = require('axios');

/*async function fetchMovieReviews() {
  try {
    const options = {
      method: 'GET',
      url: 'https://movie-series-books-database.p.rapidapi.com/1/moviereviews',
      headers: {
        'X-RapidAPI-Key': 'a93c22a361mshf533ada8ca7978cp1a027djsne09c7b444aee',
        'X-RapidAPI-Host': 'movie-series-books-database.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchMovieReviews();
*/

try { const records = await pb.collection('movies').getList(1, 1, { sort: "@random" });
console.table(records);
console.log(JSON.stringify(records, null, 2))
} catch (e) {
console.error(e) ;
}