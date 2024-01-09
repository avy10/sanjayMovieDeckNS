// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
const APIKEY = `024c2acdba0f8d056b15281072c1a833`; // this is my own API key
// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
let currentPage = 1;
let totaPages = 1;
let movies = []; // array which contains movie list

const movieListELEM = document.getElementById("movies-list");

// we will maintain an array in local storage
// [{}, {}, {}, {}, ]
// the array will contain objects, i.e. the movie objects that we mark as favourite 
function getFavMoviesFromLocalStorage(){
    // this function grabs the fav movies array from local storage
    // localStorage.getItem("favouriteMovie") will give us data in JSON string format, which is we need to parse It to make object
    const favMovies = JSON.parse(localStorage.getItem("favouriteMovie"));
    return favMovies === null ? [] : favMovies; //that is when there is no movies set as favourite
    // so when we try to grab our favourite movies array for the first time we will get null which is undesirable
    // instead we return an empty array
}

function addFavMovieInfoINLocalStorage(mInfo){

    const localStorageMovies = getFavMoviesFromLocalStorage();
    for(let i = 0; i < localStorageMovies.length; i++){
        if(localStorageMovies[i].title === mInfo.title){
            return;
        }
    }
    
    localStorage.setItem("favouriteMovie",JSON.stringify([...localStorageMovies, mInfo]));
}

function removeFavMovieFromLocalStorage (mInfo){
    const localStorageMovies = getFavMoviesFromLocalStorage(); // localStorageMovies is an array
    const filteredMovies = localStorageMovies.filter((eachMovie) => eachMovie.title != mInfo.title);
    // loop on movies, filter out movie which title wont match the movie-title we are removing
    // all other movie excpet the movie we are removing will move into filteredMovies
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


    // let us create a movie map by using reduce
    // key of our map will be title
    // value will be true or false indicating whether it has been favorited or not
    // title : {}

    const favMoviesMAPPING = favMovies.reduce((acc, curr) =>{
        acc[curr.title] = true; //{"Your Name" : true, "The Vow" : true}
        return acc;
    }, {})

    movies.forEach((eachMovie) => {
        // grab the fav movies from local storage inside the favMovies
        // search if eachMovie is present inside the favMovies i.e. Has it been favourited?
        // if it is present add the class fa-solid so that on the webpage the heart icon is already filled
        // this is useful if user marked some movies as favourite and reloaded page / closed tab
        
        // const alreadyFavourited = favMovies.find((e) => e.title === eachMovie.title); 
        // not a good method because for each movie we are looping on the favMovies again and again
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
        // console.log("MOPVIE INFOE", movieInfo);

        const ifFav = favMoviesMAPPING[movieInfo.title];
        let html = `
            <img class="poster" src=${imageURL} alt= ${title}/>
                <p class="title">${title}</p>
                <section class="vote-fav">
                    <section>
                        <p>Votes: ${vote_count}</p>
                        <p>Rating: ${vote_average}</p>
                    </section>
                    <i mInfo='${JSON.stringify(movieInfo)}' class="fa-regular fa-heart fa-2xl fav-icon ${ifFav ? "fa-solid" : ""}"></i>
                </section>
        `;
        
        
        listItem.innerHTML = html;
        movieListELEM.appendChild(listItem);

        const favIconBTN = listItem.querySelector(".fav-icon");
        favIconBTN.addEventListener("click", (event)=>{
            // console.log(event.target);
            // console.log("MINFO", event.target.getAttribute("mInfo"))

            let mInfo = JSON.parse(event.target.getAttribute("mInfo"));
            // console.log("MINFOOO",mInfo);

            if(favIconBTN.classList.contains("fa-solid")){
                // unmark it
                // remove the class to unmark the movie visually
                favIconBTN.classList.remove("fa-solid")
                // remove this movie info from the local storage
                removeFavMovieFromLocalStorage(mInfo);
            } else {
                // mark it
                // add the class to unmark the movie visually

                favIconBTN.classList.add("fa-solid")
                // add the movie info into local storage
                addFavMovieInfoINLocalStorage(mInfo);
            }
        })

    });
}

async function fetchMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`);
        let data = await response.json();
        console.log(data);
        // in the api endpoint we are fetching only top rated movies
        // language of our data is ENG-US
        // and we are only requesting page number 1 of our API
        movies = data.results; // the movies that we got from API call is being stored inside movies array
        // the api provides a results property which is an array of object
        // each object inside the results array contains the details of movies

        totaPages = data.total_pages; 

        renderMovies(movies); //render each movies on the html page
        //movielist contains the all the movie cards
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

