let romanceMoviesList = [];

let currentRomancePages = 1;

let prevRomanceBTN;
let nextRomanceBTN; 
let currRomancePage;
let totalRomancePage;

function makeOtherPagesZeroRomance(){
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
    currentSciFiPages = 1;
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    romanceGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroRomance();
    let moviesFrom = (currentRomancePages - 1) * 20 ;
    let moviesTill = moviesFrom + 19;
    
    romanceMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(romance[moviesFrom] == null) {continue}
        romanceMoviesList.push(romance[moviesFrom]);
    }
    renderMovies(romanceMoviesList);
    navigationRomance();
}

