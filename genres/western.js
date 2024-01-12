let westernMoviesList = [];

let currentWesternPages = 0;

let prevWesternBTN;
let nextWesternBTN; 
let currWesternPage;
let totalWesternPage;

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
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
}

let westernTimeOut;
function checkWesternBUTTONS(){

    if(currentWesternPages >= 2){
        prevWesternBTN.disabled = false;
    } else {
        prevWesternBTN.disabled = true;
    }
    if(currentWesternPages >= totalWesternPages){
        nextWesternBTN.disabled = true;
    } else{
        nextWesternBTN.disabled = false;
    }
}

function navigateWesternNextt(){
        currentWesternPages++;

        westernMoviesFunction();
        currWesternPage.innerHTML = currentWesternPages;
        nextWesternBTN.disabled = true;
        prevWesternBTN.disabled = true;
        clearTimeout(westernTimeOut);
        westernTimeOut = setTimeout(()=>{
            checkWesternBUTTONS();
        }, 800);
}

function navigateWesternPrevv(){
        currentWesternPages--;

        westernMoviesFunction();
        currWesternPage.innerHTML = currentWesternPages;
        nextWesternBTN.disabled = true;
        prevWesternBTN.disabled = true;
        clearTimeout(westernTimeOut);
        westernTimeOut = setTimeout(()=>{
            checkWesternBUTTONS();
        }, 800);
}

function navigationWestern(){
    const doesPaginationExist = document.querySelector("#westernPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "westernPagination";
        paginationDivva.innerHTML = `
        <button id="western-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="western-current-button" class="currentBTN"><span id="currWesternPage">1</span> of <span id="totalWesternPage">1</span></span>
            <button id="western-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevWesternBTN = document.getElementById("western-prev-button");
    nextWesternBTN = document.getElementById("western-next-button"); 

    currWesternPage = document.getElementById("currWesternPage");
    totalWesternPage = document.getElementById("totalWesternPage");
    totalWesternPage.innerHTML = totalWesternPages;
    prevWesternBTN.addEventListener("click", navigateWesternPrevv);
    nextWesternBTN.addEventListener("click", navigateWesternNextt);
}

function westernMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentWesternPages * 20;
    let moviesTill = moviesFrom + 19;
    
    westernMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(western[moviesFrom] == null) {continue}
        westernMoviesList.push(western[moviesFrom]);
    }
    renderMovies(westernMoviesList);
    navigationWestern();
}

