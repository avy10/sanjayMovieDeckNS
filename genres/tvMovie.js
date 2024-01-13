let tvMovieMoviesList = [];

let currentTVMoviePages = 1;

let prevTVMovieBTN;
let nextTVMovieBTN; 
let currTVMoviePage;
let totalTVMoviePage;

function makeOtherPagesZero(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
    currentCrimePages = 1;
    currentDramaPages = 1;
    currentFamilyPages = 1;
    currentFantasyPages = 1;
    currentHistoryPages = 1;
    currentHorrorPages = 1;
    currentMusicPages = 1;
    currentysteryPages = 1;
    currentRomancePages = 1;
    currentSciFiPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;
    tabsContainer[0].classList.remove("active-tab"); 
    tvMovieGenreBTN.classList.add("active-tab"); 
}

let tvMovieTimeOut;
function checkTVMovieBUTTONSTvMovie(){

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
            checkTVMovieBUTTONSTvMovie();
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
            checkTVMovieBUTTONSTvMovie();
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
    totalTVMoviePage.innerHTML = totalTVPages;
    prevTVMovieBTN.addEventListener("click", navigateTVMoviePrevv);
    nextTVMovieBTN.addEventListener("click", navigateTVMovieNextt);
}

function tvMovieMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = (currentTVMoviePages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    tvMovieMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(tvMovie[moviesFrom] == null) {continue}
        tvMovieMoviesList.push(tvMovie[moviesFrom]);
    }
    renderMovies(tvMovieMoviesList);
    navigationTVMovie();
}

