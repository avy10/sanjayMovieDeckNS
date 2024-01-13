let westernMoviesList = [];

let currentWesternPages = 1;

let prevWesternBTN;
let nextWesternBTN; 
let currWesternPage;
let totalWesternPage;

function makeOtherPagesZeroWestern(){
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
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    tabsContainer[0].classList.remove("active-tab"); 
    westernGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroWestern();
    let moviesFrom = (currentWesternPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    westernMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(western[moviesFrom] == null) {continue}
        westernMoviesList.push(western[moviesFrom]);
    }
    renderMovies(westernMoviesList);
    navigationWestern();
}

