let tvMovieMoviesList = [];

let currentTVMoviePages = 0;

let prevTVMovieBTN;
let nextTVMovieBTN; 
let currTVMoviePage;
let totalTVMoviePage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
    currentAnimationPages = 0;
    currentComedyPages = 0
    currentCrimePages = 0;
    currentDramaPages = 0;
    currentFamilyPages = 0;
    currentFantasyPages = 0;
    currentHistoryPages = 0;
    currentHorrorPages = 0;
    currentMusicPages = 0;
    currentysteryPages = 0;
    currentRomancePages = 0;
    currentSciFiPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let tvMovieTimeOut;
function checkTVMovieBUTTONS(){

    if(currentTVMoviePages >= 2){
        prevTVMovieBTN.disabled = false;
    } else {
        prevTVMovieBTN.disabled = true;
    }
    if(currentTVMoviePages >= totalTVMoviePages){
        nextTVMovieBTN.disabled = true;
    } else {
        nextTVMovieBTN.disabled = false;
    }
}

function navigateTVMovieNextt(){
        currentTVMoviePages++;

        tvMovieMoviesFunction();
        currTVMoviePage.innerHTML = currentTVMoviePages;
        nextTVMovieBTN.disabled = true;
        prevTVMovieBTN.disabled = true;
        clearTimeout(tvMovieTimeOut);
        tvMovieTimeOut = setTimeout(()=>{
            checkTVMovieBUTTONS();
        }, 800);
}

function navigateTVMoviePrevv(){
        currentTVMoviePages--;

        tvMovieMoviesFunction();
        currTVMoviePage.innerHTML = currentTVMoviePages;
        nextTVMovieBTN.disabled = true;
        prevTVMovieBTN.disabled = true;
        clearTimeout(tvMovieTimeOut);
        tvMovieTimeOut = setTimeout(()=>{
            checkTVMovieBUTTONS();
        }, 800);
}

function navigationTVMovie(){
    const doesPaginationExist = document.querySelector("#tvMoviePagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "tvMoviePagination";
        paginationDivva.innerHTML = `
        <button id="tvMovie-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="tvMovie-current-button" class="currentBTN"><span id="currTVMoviePage">1</span> of <span id="totalTVMoviePage">1</span></span>
            <button id="tvMovie-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevTVMovieBTN = document.getElementById("tvMovie-prev-button");
    nextTVMovieBTN = document.getElementById("tvMovie-next-button"); 

    currTVMoviePage = document.getElementById("currTVMoviePage");
    totalTVMoviePage = document.getElementById("totalTVMoviePage");
    totalTVMoviePage.innerHTML = totalTVMoviePages;
    prevTVMovieBTN.addEventListener("click", navigateTVMoviePrevv);
    nextTVMovieBTN.addEventListener("click", navigateTVMovieNextt);
}

function tvMovieMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentTVMoviePages * 20;
    let moviesTill = moviesFrom + 19;
    
    tvMovieMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(tvMovie[moviesFrom] == null) {continue}
        tvMovieMoviesList.push(tvMovie[moviesFrom]);
    }
    renderMovies(tvMovieMoviesList);
    navigationTVMovie();
}

