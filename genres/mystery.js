let mysteryMoviesList = [];

let currentMysteryPages = 1;

let prevMysteryBTN;
let nextMysteryBTN; 
let currMysteryPage;
let totalMysteryPage;

function makeOtherPagesZeroMystery(){
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
    currentRomancePages = 1;
    currentSciFiPages = 1;
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    mysteryGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroMystery();
    let moviesFrom = (currentMysteryPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    mysteryMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(mystery[moviesFrom] == null) {continue}
        mysteryMoviesList.push(mystery[moviesFrom]);
    }
    renderMovies(mysteryMoviesList);
    navigationMystery();
}

