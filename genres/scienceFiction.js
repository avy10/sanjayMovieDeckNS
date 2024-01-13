let sciFiMoviesList = [];

let currentSciFiPages = 1;

let prevSciFiBTN;
let nextSciFiBTN; 
let currSciFiPage;
let totalSciFiPage;

function makeOtherPagesZeroSciFi(){
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
    currentTVPages = 1;
    currentThrillerPages = 1;
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    sciFiGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroSciFi();
    // console.log("hello")
    let moviesFrom = (currentSciFiPages - 1)* 20 ;
    let moviesTill = moviesFrom + 19;
    
    sciFiMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(scienceFiction[moviesFrom] == null) {continue}
        sciFiMoviesList.push(scienceFiction[moviesFrom]);
    }
    renderMovies(sciFiMoviesList);
    navigationSciFi();
}

