let adventureMoviesList = [];

let currentAdventurePages = 0;

let prevAdventureBTN;
let nextAdventureBTN; 
let currAdventurePage;
let totalAdventurePage;

function makeOtherPagesZero(){
    currentActionPages = 0;
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
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let adventureTimeOut;
function checkAdventureBUTTONS(){

    if(currentAdventurePages >= 2){
        prevAdventureBTN.disabled=false;
    } else {
        prevAdventureBTN.disabled = true;
    }
    if(currentAdventurePages >= totalAdventurePages){
        nextAdventureBTN.disabled = true;
    } else{
        nextAdventureBTN.disabled = false;
        
    }

}
function navigateAdventureNextt(){
        currentAdventurePages++;

        adventureMoviesFunction();
        currAdventurePage.innerHTML = currentAdventurePages;
        nextAdventureBTN.disabled = true;
        prevAdventureBTN.disabled = true;
        clearTimeout(adventureTimeOut);
        adventureTimeOut = setTimeout(()=>{
            checkAdventureBUTTONS();
        }, 800)
}

function navigateAdventurePrevv(){
        currentAdventurePages--;

        adventureMoviesFunction();
        currAdventurePage.innerHTML = currentAdventurePages;
        nextAdventureBTN.disabled = true;
        prevAdventureBTN.disabled = true;
        clearTimeout(adventureTimeOut);
        adventureTimeOut = setTimeout(()=>{
            checkAdventureBUTTONS();
        }, 800)
}

function navigationAdventure(){
    const doesPaginationExist = document.querySelector("#adventurePagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="adventurePagination";
        paginationDivva.innerHTML = `
        <button id="adventure-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="adventure-current-button" class="currentBTN"><span id="currAdventurePage">1</span> of <span id="totalAdventurePage">1</span></span>
            <button id="adventure-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevAdventureBTN = document.getElementById("adventure-prev-button");;
    nextAdventureBTN = document.getElementById("adventure-next-button");; 

    currAdventurePage = document.getElementById("currAdventurePage");
    totalAdventurePage = document.getElementById("totalAdventurePage");
    totalAdventurePage.innerHTML = totalAdventurePages;
    prevAdventureBTN.addEventListener("click", navigateAdventurePrevv);
    nextAdventureBTN.addEventListener("click", navigateAdventureNextt);
}

function adventureMoviesFunction(){
    makeOtherPagesZero();
    // console.log("hello")
    let moviesFrom = currentAdventurePages * 20 ;
    let moviesTill = moviesFrom + 19;
    
    adventureMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(adventure[moviesFrom] == null) {continue}
        adventureMoviesList.push(adventure[moviesFrom]);
    }
    renderMovies(adventureMoviesList);
    navigationAdventure();

    
}