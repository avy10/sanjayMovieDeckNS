let warMoviesList = [];

let currentWarPages = 1;

let prevWarBTN;
let nextWarBTN; 
let currWarPage;
let totalWarPage;

function makeOtherPagesZeroWar(){
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
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    warGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroWar();
    let moviesFrom = (currentWarPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    warMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(war[moviesFrom] == null) {continue}
        warMoviesList.push(war[moviesFrom]);
    }
    renderMovies(warMoviesList);
    navigationWar();
}

