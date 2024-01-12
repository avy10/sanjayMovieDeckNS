let warMoviesList = [];

let currentWarPages = 0;

let prevWarBTN;
let nextWarBTN; 
let currWarPage;
let totalWarPage;

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
    currentWesternPages = 0;
}

let warTimeOut;
function checkWarBUTTONS(){

    if(currentWarPages >= 2){
        prevWarBTN.disabled = false;
    } else {
        prevWarBTN.disabled = true;
    }
    if(currentWarPages >= totalWarPages){
        nextWarBTN.disabled = true;
    } else {
        nextWarBTN.disabled = false;
    }
}

function navigateWarNextt(){
        currentWarPages++;

        warMoviesFunction();
        currWarPage.innerHTML = currentWarPages;
        nextWarBTN.disabled = true;
        prevWarBTN.disabled = true;
        clearTimeout(warTimeOut);
        warTimeOut = setTimeout(()=>{
            checkWarBUTTONS();
        }, 800);
}

function navigateWarPrevv(){
        currentWarPages--;

        warMoviesFunction();
        currWarPage.innerHTML = currentWarPages;
        nextWarBTN.disabled = true;
        prevWarBTN.disabled = true;
        clearTimeout(warTimeOut);
        warTimeOut = setTimeout(()=>{
            checkWarBUTTONS();
        }, 800);
}

function navigationWar(){
    const doesPaginationExist = document.querySelector("#warPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "warPagination";
        paginationDivva.innerHTML = `
        <button id="war-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="war-current-button" class="currentBTN"><span id="currWarPage">1</span> of <span id="totalWarPage">1</span></span>
            <button id="war-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevWarBTN = document.getElementById("war-prev-button");
    nextWarBTN = document.getElementById("war-next-button"); 

    currWarPage = document.getElementById("currWarPage");
    totalWarPage = document.getElementById("totalWarPage");
    totalWarPage.innerHTML = totalWarPages; // Assuming totalWarPages was defined elsewhere
    prevWarBTN.addEventListener("click", navigateWarPrevv);
    nextWarBTN.addEventListener("click", navigateWarNextt);
}

function warMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentWarPages * 20;
    let moviesTill = moviesFrom + 19;
    
    warMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(war[moviesFrom] == null) {continue}
        warMoviesList.push(war[moviesFrom]);
    }
    renderMovies(warMoviesList);
    navigationWar();
}

