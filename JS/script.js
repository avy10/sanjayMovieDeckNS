
let prevBTN;
let nextBTN; 
let currPage;
let tPage; 
const navigationAvyDIVVA = document.querySelector(".navigationAvy")


const searchBTN = document.getElementById("search-button");
const searchQueryBox = document.getElementById("search-input");
// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
const APIKEY = `024c2acdba0f8d056b15281072c1a833`; // this is my own API key
// https://api.themoviedb.org/3/movie/top_rated?api_key=024c2acdba0f8d056b15281072c1a833&language=en-US&page=1
let currentPage = 1;
let totaPages = 1;

let previousSearchQuery;
let searchPage = 1;
let totalSearchPage = 1;
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

        let imageURL = poster_path == null ? `images/imgNotFound.jpg` :  `https://image.tmdb.org/t/p/original${poster_path}` ;

        let movieInfo = {
            title : title.replaceAll(`'`, ``),
            vote_average,
            vote_count,
            poster_path,
        };
        // console.log("MOPVIE INFOE", movieInfo);

        const ifFav = favMoviesMAPPING[movieInfo.title];

        // adding genre buttons
        const genres = JSON.parse(localStorage.getItem("genreID"));
        if(genres == null){
            console.log("I AM RELOADING")
            location.reload();
        }
        let genreBTNHTML = "";
        for(let genre of eachMovie.genre_ids){
            const str = `
            <div id=${genre}>${genres[genre]} </div>
            `
            genreBTNHTML += str;
            /* const btn = document.createElement("button");
            // console.log(genre, genres[genre])
            btn.id=genre;
            btn.textContent=genres.genre;
            genreBTNARRAY.push(btn) */
            }
        // console.log(genreBTNARRAY)
        

        let html = `
            
            <div class="imgContainer">
                <img class="poster" src=${imageURL} alt= ${title}/>
            </div>
            
            <div class="fullDetails">
                <p class="title">${title}</p>
                <section class="vote-fav">
                    <section>
                        <p>Votes: ${vote_count}</p>
                        <p>Rating: ${vote_average}</p>
                    </section>
                    <i mInfo='${JSON.stringify(movieInfo)}' class="fa-regular fa-heart fa-2xl fav-icon ${ifFav ? "fa-solid" : ""}"></i>
                </section>
                <div class="genreBTNS">
                ${genreBTNHTML}
                </div>
            </div>
            <div class="extraInfo">
                <p>${eachMovie.overview}
            </div>

        `;
        
        
        listItem.innerHTML = html;

        movieListELEM.appendChild(listItem);
        
        //  listItem.style.background = `rgba(0, 0, 0, 0.2) url('${imageURL}') no-repeat center center`;
        //  listItem.style.backgroundSize = "100% 100%"
        
        
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
function renderNavigation(){
    const doesPaginationExist = document.querySelector("#allPagination");
    console.log("doesPaginationExist", doesPaginationExist);
    if(!doesPaginationExist){
        console.log("AYOOOOOOOOOOO")
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="allPagination";

        paginationDivva.innerHTML = `
        <button id="prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="current-button" class="currentBTN"><span id="currPage">1</span> of <span id="totalPage">1</span></span>
            <button id="next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
        navigationAvyDIVVA.appendChild(paginationDivva)
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    }
    
    prevBTN = document.getElementById("prev-button");
    nextBTN = document.getElementById("next-button");
    currPage = document.getElementById("currPage");
    tPage = document.getElementById("totalPage");
    prevBTN.addEventListener("click", navigatePrevv);
nextBTN.addEventListener("click", navigateNextt);
}
async function fetchMovies(){
    // const moviesListPaginationELEMENT = document.querySelector(".movies-list-pagination")
/*     const doesPaginationExist = document.querySelector("#allPagination");
    console.log("doesPaginationExist", doesPaginationExist);
    if(!doesPaginationExist){
        console.log("AYOOOOOOOOOOO")
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="allPagination";

        paginationDivva.innerHTML = `
        <button id="prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="current-button" class="currentBTN"><span id="currPage">1</span> of <span id="totalPage">1</span></span>
            <button id="next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
        navigationAvyDIVVA.appendChild(paginationDivva)
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    }
    
    prevBTN = document.getElementById("prev-button");
    nextBTN = document.getElementById("next-button");
    currPage = document.getElementById("currPage");
    tPage = document.getElementById("totalPage"); */
    renderNavigation()
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=${currentPage}`);
        let data = await response.json();
        console.log(data);
        // in the api endpoint we are fetching only top rated movies
        // language of our data is ENG-US
        // and we are only requesting page number 1 of our API
        movies = data.results; // the movies that we got from API call is being stored inside movies array
        // the api provides a results property which is an array of object
        // each object inside the results array contains the details of movies

        totaPages = data.total_pages; 
        tPage.textContent=totaPages;
        renderMovies(movies); //render each movies on the html page
        //movielist contains the all the movie cards
    } catch(error){
        console.log(error);
    }
}

// whenever the user comes on the webpage for the first time we should fetch the movies using the fetchMovies() function
fetchMovies();

// after API call, loop in each movie and create a movie-card, and show the movie card on the webpage


let timeOut;
function checkBUTTONS(){
    if(currentPage >= 2){
        prevBTN.disabled=false;
    } else {
        prevBTN.disabled = true;
    }
    if(currentPage >= totaPages){
        nextBTN.disabled = true;
    } else{
        nextBTN.disabled = false;
        
    }

}

function checkSearchButtons(){
    if(searchPage >= 2){
        prevBTN.disabled=false;
    } else {
        prevBTN.disabled = true;
    }
    console.log(searchPage, totalSearchPage)
    if(searchPage >= totalSearchPage){
        console.log("WHY NOt")
        nextBTN.disabled = true;
    } else{
        nextBTN.disabled = false;
        
    }
}

function navigateNextt(){
    if(searchQueryBox.value != ""){
        searchPage++;
        
        searchMovies();
        
        currPage.innerHTML = searchPage;
        
        nextBTN.disabled = true;
        prevBTN.disabled = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkSearchButtons();
        }, 800)
    } else {
        currentPage++;
        fetchMovies();
        currPage.innerHTML = currentPage;
        nextBTN.disabled = true;
        prevBTN.disabled = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkBUTTONS();
        }, 800)
    }
    
}

function navigatePrevv(){
    if(searchQueryBox.value != ""){
        searchPage--;
        
        searchMovies();

        currPage.innerHTML = searchPage;

        nextBTN.disabled = true;
        prevBTN.disabled = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkSearchButtons();
        }, 800)
    } else{
        currentPage--;
        fetchMovies();
        currPage.innerHTML = currentPage;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkBUTTONS();
        }, 800)
    }
    
}
prevBTN.addEventListener("click", navigatePrevv);
nextBTN.addEventListener("click", navigateNextt);

// search funtionality
function searchMovies(){
    /*  */
    renderNavigation()

    /*  */
    const searchQuery = searchQueryBox.value;
    if(previousSearchQuery != searchQuery){
        searchPage = 1;
    }
    previousSearchQuery = searchQuery;
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${searchPage}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRjMmFjZGJhMGY4ZDA1NmIxNTI4MTA3MmMxYTgzMyIsInN1YiI6IjY1OTQ0MWNmNTFhNjRlMDI3MWY1ODQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8bj-lh061oQKMX4iQSEYJmnwYp2P0kFTvYi30yfQfQ',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        
        totalSearchPage = data.total_pages;
        currPage.innerHTML = searchPage;
        tPage.innerHTML = totalSearchPage;
        renderMovies(data.results)
        checkSearchButtons();
        // Process the response data here
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
searchBTN.addEventListener("click", searchMovies);