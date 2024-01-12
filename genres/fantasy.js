let fantasyMoviesList = [];

let currentFantasyPages = 0;

let prevFantasyBTN;
let nextFantasyBTN; 
let currFantasyPage;
let totalFantasyPage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
    currentAnimationPages = 0;
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
    currentWesternPages = 0;
}

let fantasyTimeOut;
function checkFantasyBUTTONS(){

    if(currentFantasyPages >= 2){
        prevFantasyBTN.disabled = false;
    } else {
        prevFantasyBTN.disabled = true;
    }
    if(currentFantasyPages >= totalFantasyPages){
        nextFantasyBTN.disabled = true;
    } else {
        nextFantasyBTN.disabled = false;
    }
}

function navigateFantasyNextt(){
        currentFantasyPages++;

        fantasyMoviesFunction();
        currFantasyPage.innerHTML = currentFantasyPages;
        nextFantasyBTN.disabled = true;
        prevFantasyBTN.disabled = true;
        clearTimeout(fantasyTimeOut);
        fantasyTimeOut = setTimeout(()=>{
            checkFantasyBUTTONS();
        }, 800)
}

function navigateFantasyPrevv(){
        currentFantasyPages--;

        fantasyMoviesFunction();
        currFantasyPage.innerHTML = currentFantasyPages;
        nextFantasyBTN.disabled = true;
        prevFantasyBTN.disabled = true;
        clearTimeout(fantasyTimeOut);
        fantasyTimeOut = setTimeout(()=>{
            checkFantasyBUTTONS();
        }, 800)
}

function navigationFantasy(){
    const doesPaginationExist = document.querySelector("#fantasyPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "fantasyPagination";
        paginationDivva.innerHTML = `
        <button id="fantasy-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="fantasy-current-button" class="currentBTN"><span id="currFantasyPage">1</span> of <span id="totalFantasyPage">1</span></span>
            <button id="fantasy-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevFantasyBTN = document.getElementById("fantasy-prev-button");
    nextFantasyBTN = document.getElementById("fantasy-next-button");

    currFantasyPage = document.getElementById("currFantasyPage");
    totalFantasyPage = document.getElementById("totalFantasyPage");
    totalFantasyPage.innerHTML = totalFantasyPages; 
    prevFantasyBTN.addEventListener("click", navigateFantasyPrevv);
    nextFantasyBTN.addEventListener("click", navigateFantasyNextt);
}

function fantasyMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentFantasyPages * 20;
    let moviesTill = moviesFrom + 19;
    
    fantasyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(fantasy[moviesFrom] == null) {continue}
        fantasyMoviesList.push(fantasy[moviesFrom]);
    }
    renderMovies(fantasyMoviesList);
    navigationFantasy();
}

