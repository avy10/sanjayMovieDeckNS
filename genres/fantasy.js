let fantasyMoviesList = [];

let currentFantasyPages = 1;

let prevFantasyBTN;
let nextFantasyBTN; 
let currFantasyPage;
let totalFantasyPage;

function makeOtherPagesZeroFantasy(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
    currentCrimePages = 1;
    currentDramaPages = 1;
    currentFamilyPages = 1;
    currentHistoryPages = 1;
    currentHorrorPages = 1;
    currentMusicPages = 1;
    currentysteryPages = 1;
    currentRomancePages = 1;
    currentSciFiPages = 1;
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    fantasyGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroFantasy();
    let moviesFrom = (currentFantasyPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    fantasyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(fantasy[moviesFrom] == null) {continue}
        fantasyMoviesList.push(fantasy[moviesFrom]);
    }
    renderMovies(fantasyMoviesList);
    navigationFantasy();
}

