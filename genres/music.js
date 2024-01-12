let musicMoviesList = [];

let currentMusicPages = 0;

let prevMusicBTN;
let nextMusicBTN; 
let currMusicPage;
let totalMusicPage;

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
    currentysteryPages = 0;
    currentRomancePages = 0;
    currentSciFiPages = 0;
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
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
    makeOtherPagesZero();
    let moviesFrom = currentMusicPages * 20;
    let moviesTill = moviesFrom + 19;

    musicMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(music[moviesFrom] == null) {continue}
        musicMoviesList.push(music[moviesFrom]);
    }
    renderMovies(musicMoviesList);
    navigationMusic();
}

