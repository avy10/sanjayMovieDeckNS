let romanceMoviesList = [];

let currentRomancePages = 0;

let prevRomanceBTN;
let nextRomanceBTN; 
let currRomancePage;
let totalRomancePage;

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
    currentSciFiPages = 0;
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let romanceTimeOut;
function checkRomanceBUTTONS(){

    if(currentRomancePages >= 2){
        prevRomanceBTN.disabled=false;
    } else {
        prevRomanceBTN.disabled = true;
    }
    if(currentRomancePages >= totalRomancePages){
        nextRomanceBTN.disabled = true;
    } else{
        nextRomanceBTN.disabled = false;
    }
}

function navigateRomanceNextt(){
        currentRomancePages++;

        romanceMoviesFunction();
        currRomancePage.innerHTML = currentRomancePages;
        nextRomanceBTN.disabled = true;
        prevRomanceBTN.disabled = true;
        clearTimeout(romanceTimeOut);
        romanceTimeOut = setTimeout(()=>{
            checkRomanceBUTTONS();
        }, 800);
}

function navigateRomancePrevv(){
        currentRomancePages--;

        romanceMoviesFunction();
        currRomancePage.innerHTML = currentRomancePages;
        nextRomanceBTN.disabled = true;
        prevRomanceBTN.disabled = true;
        clearTimeout(romanceTimeOut);
        romanceTimeOut = setTimeout(()=>{
            checkRomanceBUTTONS();
        }, 800);
}

function navigationRomance(){
    const doesPaginationExist = document.querySelector("#romancePagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="romancePagination";
        paginationDivva.innerHTML = `
        <button id="romance-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="romance-current-button" class="currentBTN"><span id="currRomancePage">1</span> of <span id="totalRomancePage">1</span></span>
            <button id="romance-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevRomanceBTN = document.getElementById("romance-prev-button");;
    nextRomanceBTN = document.getElementById("romance-next-button");; 

    currRomancePage = document.getElementById("currRomancePage");
    totalRomancePage = document.getElementById("totalRomancePage");
    totalRomancePage.innerHTML = totalRomancePages; 
    prevRomanceBTN.addEventListener("click", navigateRomancePrevv);
    nextRomanceBTN.addEventListener("click", navigateRomanceNextt);
}

function romanceMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentRomancePages * 20 ;
    let moviesTill = moviesFrom + 19;
    
    romanceMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(romance[moviesFrom] == null) {continue}
        romanceMoviesList.push(romance[moviesFrom]);
    }
    renderMovies(romanceMoviesList);
    navigationRomance();
}

