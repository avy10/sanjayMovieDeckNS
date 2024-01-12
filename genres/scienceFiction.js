let sciFiMoviesList = [];

let currentSciFiPages = 0;

let prevSciFiBTN;
let nextSciFiBTN; 
let currSciFiPage;
let totalSciFiPage;

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
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let sciFiTimeOut;
function checkSciFiBUTTONS(){

    if(currentSciFiPages >= 2){
        prevSciFiBTN.disabled=false;
    } else {
        prevSciFiBTN.disabled = true;
    }
    if(currentSciFiPages >= totalSciFiPages){
        nextSciFiBTN.disabled = true;
    } else{
        nextSciFiBTN.disabled = false;
        
    }

}
function navigateSciFiNextt(){
        currentSciFiPages++;

        sciFiMoviesFunction();
        currSciFiPage.innerHTML = currentSciFiPages;
        nextSciFiBTN.disabled = true;
        prevSciFiBTN.disabled = true;
        clearTimeout(sciFiTimeOut);
        sciFiTimeOut = setTimeout(()=>{
            checkSciFiBUTTONS();
        }, 800)
}

function navigateSciFiPrevv(){
        currentSciFiPages--;

        sciFiMoviesFunction();
        currSciFiPage.innerHTML = currentSciFiPages;
        nextSciFiBTN.disabled = true;
        prevSciFiBTN.disabled = true;
        clearTimeout(sciFiTimeOut);
        sciFiTimeOut = setTimeout(()=>{
            checkSciFiBUTTONS();
        }, 800)
}

function navigationSciFi(){
    const doesPaginationExist = document.querySelector("#sciFiPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="sciFiPagination";
        paginationDivva.innerHTML = `
        <button id="sciFi-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="sciFi-current-button" class="currentBTN"><span id="currSciFiPage">1</span> of <span id="totalSciFiPage">1</span></span>
            <button id="sciFi-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevSciFiBTN = document.getElementById("sciFi-prev-button");;
    nextSciFiBTN = document.getElementById("sciFi-next-button");; 

    currSciFiPage = document.getElementById("currSciFiPage");
    totalSciFiPage = document.getElementById("totalSciFiPage");
    totalSciFiPage.innerHTML = totalSciFiPages;
    prevSciFiBTN.addEventListener("click", navigateSciFiPrevv);
    nextSciFiBTN.addEventListener("click", navigateSciFiNextt);
}

function sciFiMoviesFunction(){
    makeOtherPagesZero();
    // console.log("hello")
    let moviesFrom = currentSciFiPages * 20 ;
    let moviesTill = moviesFrom + 19;
    
    sciFiMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(sciFi[moviesFrom] == null) {continue}
        sciFiMoviesList.push(sciFi[moviesFrom]);
    }
    renderMovies(sciFiMoviesList);
    navigationSciFi();
}

