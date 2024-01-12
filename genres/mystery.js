let mysteryMoviesList = [];

let currentMysteryPages = 0;

let prevMysteryBTN;
let nextMysteryBTN; 
let currMysteryPage;
let totalMysteryPage;

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
    currentRomancePages = 0;
    currentSciFiPages = 0;
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let mysteryTimeOut;
function checkMysteryBUTTONS(){

    if(currentMysteryPages >= 2){
        prevMysteryBTN.disabled = false;
    } else {
        prevMysteryBTN.disabled = true;
    }
    if(currentMysteryPages >= totalMysteryPages){
        nextMysteryBTN.disabled = true;
    } else {
        nextMysteryBTN.disabled = false;
    }
}

function navigateMysteryNextt(){
        currentMysteryPages++;

        mysteryMoviesFunction();
        currMysteryPage.innerHTML = currentMysteryPages;
        nextMysteryBTN.disabled = true;
        prevMysteryBTN.disabled = true;
        clearTimeout(mysteryTimeOut);
        mysteryTimeOut = setTimeout(()=>{
            checkMysteryBUTTONS();
        }, 800);
}

function navigateMysteryPrevv(){
        currentMysteryPages--;

        mysteryMoviesFunction();
        currMysteryPage.innerHTML = currentMysteryPages;
        nextMysteryBTN.disabled = true;
        prevMysteryBTN.disabled = true;
        clearTimeout(mysteryTimeOut);
        mysteryTimeOut = setTimeout(()=>{
            checkMysteryBUTTONS();
        }, 800);
}

function navigationMystery(){
    const doesPaginationExist = document.querySelector("#mysteryPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "mysteryPagination";
        paginationDivva.innerHTML = `
        <button id="mystery-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="mystery-current-button" class="currentBTN"><span id="currMysteryPage">1</span> of <span id="totalMysteryPage">1</span></span>
            <button id="mystery-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevMysteryBTN = document.getElementById("mystery-prev-button");
    nextMysteryBTN = document.getElementById("mystery-next-button"); 

    currMysteryPage = document.getElementById("currMysteryPage");
    totalMysteryPage = document.getElementById("totalMysteryPage");
    totalMysteryPage.innerHTML = totalMysteryPages;
    prevMysteryBTN.addEventListener("click", navigateMysteryPrevv);
    nextMysteryBTN.addEventListener("click", navigateMysteryNextt);
}

function mysteryMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentMysteryPages * 20;
    let moviesTill = moviesFrom + 19;
    
    mysteryMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(mystery[moviesFrom] == null) {continue}
        mysteryMoviesList.push(mystery[moviesFrom]);
    }
    renderMovies(mysteryMoviesList);
    navigationMystery();
}

