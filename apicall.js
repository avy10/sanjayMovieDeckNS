// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
const APIKEY = `024c2acdba0f8d056b15281072c1a833`; // this is my own API key
// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
let currentPage = 1;
let totaPages = 1;
let movies = []; // array which contains movie list




async function fetchMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`);
        let data = await response.json();
        console.log(data);

        movies = data.results; // the movies that we got from API call is being stored inside movies array
        totaPages = data.total_pages; 

        renderMovies(movies);
    } catch(error){
        console.log(error);
    }
}

// whenever the user comes on the webpage for the first time we should fetch the movies using the fetchMovies() function
fetchMovies();

// after API call, loop in each movie and create a movie-card, and show the movie card on the webpage
