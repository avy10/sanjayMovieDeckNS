let musicMoviesList = [];

let currentMusicPages = 1;

let prevMusicBTN;
let nextMusicBTN; 
let currMusicPage;
let totalMusicPage;

function makeOtherPagesZeroMusic(){
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
    currentysteryPages = 1;
    currentRomancePages = 1;
    currentSciFiPages = 1;
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    musicGenreBTN.classList.add("active-tab"); 
}

let musicTimeOut;
function checkMusicBUTTONS(){

    if(currentMusicPages >= 2){
        prevMusicBTN.disabled = false;
    } else {
        prevMusicBTN.disabled = true;
    }
    if(currentMusicPages >= totalMusicPages){
        nextMusicBTN.disabled = true;
    } else {
        nextMusicBTN.disabled = false;
    }
}

function navigateMusicNextt(){
        currentMusicPages++;

        musicMoviesFunction();
        currMusicPage.innerHTML = currentMusicPages;
        nextMusicBTN.disabled = true;
        prevMusicBTN.disabled = true;
        clearTimeout(musicTimeOut);
        musicTimeOut = setTimeout(() => {
            checkMusicBUTTONS();
        }, 800);
}

function navigateMusicPrevv(){
        currentMusicPages--;

        musicMoviesFunction();
        currMusicPage.innerHTML = currentMusicPages;
        nextMusicBTN.disabled = true;
        prevMusicBTN.disabled = true;
        clearTimeout(musicTimeOut);
        musicTimeOut = setTimeout(() => {
            checkMusicBUTTONS();
        }, 800);
}

function navigationMusic(){
    const doesPaginationExist = document.querySelector("#musicPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = "";
        const paginationDivva = document.createElement("div");
        paginationDivva.className = "pagination";
        paginationDivva.id = "musicPagination";
        paginationDivva.innerHTML = `
        <button id="music-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="music-current-button" class="currentBTN"><span id="currMusicPage">1</span> of <span id="totalMusicPage">1</span></span>
            <button id="music-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
        navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevMusicBTN = document.getElementById("music-prev-button");
    nextMusicBTN = document.getElementById("music-next-button");

    currMusicPage = document.getElementById("currMusicPage");
    totalMusicPage = document.getElementById("totalMusicPage");
    totalMusicPage.innerHTML = totalMusicPages; 
    prevMusicBTN.addEventListener("click", navigateMusicPrevv);
    nextMusicBTN.addEventListener("click", navigateMusicNextt);
}

function musicMoviesFunction(){
    makeOtherPagesZeroMusic();
    let moviesFrom = (currentMusicPages - 1) * 20;
    let moviesTill = moviesFrom + 19;

    musicMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(music[moviesFrom] == null) {continue}
        musicMoviesList.push(music[moviesFrom]);
    }
    renderMovies(musicMoviesList);
    navigationMusic();
}

