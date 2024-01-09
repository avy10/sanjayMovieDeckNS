// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
const APIKEY = `024c2acdba0f8d056b15281072c1a833`; // this is my own API key
// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
let currentPage = 1;
let totaPages = 1;
let movies = []; // array which contains movie list

const movieListELEM = document.getElementById("movies-list");

function getFavMoviesFromLocalStorage(){
    const favMovies = JSON.parse(localStorage.getItem("favouriteMovie"));
    return favMovies === null ? [] : favMovies;
}

function addMovieInfoINLocalStorage(mInfo){
    if(mInfo.length === 0) {

    }
    const localStorageMovies = getFavMoviesFromLocalStorage();
    localStorage.setItem("favouriteMovie",JSON.stringify([...localStorageMovies, ...mInfo]));
}

function removeFavMovieFromLocalStorage (mInfo){
    const localStorageMovies = getFavMoviesFromLocalStorage();
    const filteredMovies = localStorageMovies.filter((eachMovie) => eachMovie.title != mInfo.title);
    localStorage.setItem("favouriteMovie", JSON.stringify(filteredMovies));

}



function renderMovies(movies = []) {
    // create the movie card for each movie element inside the movies
    // then display the movie card on the webpage
    movieListELEM.innerHTML = "";
    if(movies.length === 0) {
        return;
    }
    
    const favMovies = getFavMoviesFromLocalStorage();

    favMovies.reduce((acc, curr) => {
        console.log(acc, curr);
        return curr;
    }, `{}`)

    movies.forEach((eachMovie) => {

        const alreadyFavourited = favMovies.find((e) => e.title === eachMovie.title);
        const {poster_path, title, vote_average, vote_count} = eachMovie;
        let listItem = document.createElement("li");
        listItem.className = "card";

        let imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;

        let movieInfo = {
            title : title.replaceAll(`'`, ``),
            vote_average,
            vote_count,
            poster_path,
        };
        console.log("MOPVIE INFOE", movieInfo);

        let html = `
            <img class="poster" src=${imageURL}
                    alt= ${title}
            />
                <p class="title">${title}</p>
                <section class="vote-fav">
                    <section>
                        <p>Votes: ${vote_count}</p>
                        <p>Rating: ${vote_average}</p>
                    </section>
                    <i minfo='${JSON.stringify(movieInfo)}' class="fa-regular fa-heart fa-2xl fav-icon"></i>
                </section>
        `;
        
                listItem.innerHTML = html;
                movieListELEM.appendChild(listItem);

        const favIconBTN = listItem.querySelector(".fav-icon");
        favIconBTN.addEventListener("click", (event)=>{
            console.log(event.target);
            console.log("MINFO", event.target.getAttribute("minfo"))
            // let mInfo = JSON.parse(event.target.getAttribute("minfo"));
            // mInfo = JSON.parse(mInfo);
            // console.log(mInfo);

            if(favIconBTN.classList.contains("fa-solid")){
                // unmark it
                // remove the class to unmark the movie visually
                favIconBTN.classList.remove("fa-solid")
                // remove this movie info from the local storage
                // removeFavMovieFromLocalStorage(mInfo);
            } else {
                // mark it
                favIconBTN.classList.add("fa-solid")
                // addMovieInfoINLocalStorage(mInfo);
            }
        })

    });
}

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


const prevBTN = document.getElementById("prev-button");
const nextBTN = document.getElementById("next-button");
const currPage = document.getElementById("currPage");
const tPage = document.getElementById("totalPage");



function navigateNextt(){
    currentPage++;
    
    currPage.innerHTML = currentPage;

    if(currentPage >= totaPages){
        nextBTN.disabled = true;
    } else{
        nextBTN.disabled = false;
        
    }
}
prevBTN.addEventListener("click", navigatePrevv);
prevBTN.addEventListener("click", navigateNextt);

