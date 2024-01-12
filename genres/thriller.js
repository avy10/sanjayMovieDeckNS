let thrillerMoviesList = [];

let currentThrillerPages = 0;

let prevThrillerBTN;
let nextThrillerBTN; 
let currThrillerPage;
let totalThrillerPage;

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
    currentWarPages = 0;
    currentWesternPages = 0;
}

let thrillerTimeOut;
function checkThrillerBUTTONS(){

    if(currentThrillerPages >= 2){
        prevThrillerBTN.disabled = false;
    } else {
        prevThrillerBTN.disabled = true;
    }
    if(currentThrillerPages >= totalThrillerPages){
        nextThrillerBTN.disabled = true;
    } else {
        nextThrillerBTN.disabled = false;
    }
}

function navigateThrillerNextt(){
        currentThrillerPages++;

        thrillerMoviesFunction();
        currThrillerPage.innerHTML = currentThrillerPages;
        nextThrillerBTN.disabled = true;
        prevThrillerBTN.disabled = true;
        clearTimeout(thrillerTimeOut);
        thrillerTimeOut = setTimeout(()=>{
            checkThrillerBUTTONS();
        }, 800);
}

function navigateThrillerPrevv(){
        currentThrillerPages--;

        thrillerMoviesFunction();
        currThrillerPage.innerHTML = currentThrillerPages;
        nextThrillerBTN.disabled = true;
        prevThrillerBTN.disabled = true;
        clearTimeout(thrillerTimeOut);
        thrillerTimeOut = setTimeout(()=>{
            checkThrillerBUTTONS();
        }, 800);
}

function navigationThriller(){
    const doesPaginationExist = document.querySelector("#thrillerPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "thrillerPagination";
        paginationDivva.innerHTML = `
        <button id="thriller-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="thriller-current-button" class="currentBTN"><span id="currThrillerPage">1</span> of <span id="totalThrillerPage">1</span></span>
            <button id="thriller-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevThrillerBTN = document.getElementById("thriller-prev-button");
    nextThrillerBTN = document.getElementById("thriller-next-button"); 

    currThrillerPage = document.getElementById("currThrillerPage");
    totalThrillerPage = document.getElementById("totalThrillerPage");
    totalThrillerPage.innerHTML = totalThrillerPages;
    prevThrillerBTN.addEventListener("click", navigateThrillerPrevv);
    nextThrillerBTN.addEventListener("click", navigateThrillerNextt);
}

function thrillerMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentThrillerPages * 20;
    let moviesTill = moviesFrom + 19;
    
    thrillerMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(thriller[moviesFrom] == null) {continue}
        thrillerMoviesList.push(thriller[moviesFrom]);
    }
    renderMovies(thrillerMoviesList);
    navigationThriller();
}

