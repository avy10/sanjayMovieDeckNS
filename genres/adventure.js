let adventureMoviesList = [];

let currentAdventurePages = 1;

let prevAdventureBTN;
let nextAdventureBTN; 
let currAdventurePage;
let totalAdventurePage;

function makeOtherPagesZeroAdventure(){
    currentActionPages = 1;
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
    currentWarPages = 1;
    currentWesternPages = 1;

    tabsContainer[0].classList.remove("active-tab"); 
    adventureGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroAdventure();
    // console.log("hello")
    let moviesFrom = (currentAdventurePages - 1) * 20 ;
    let moviesTill = moviesFrom + 19;
    
    adventureMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(adventure[moviesFrom] == null) {continue}
        adventureMoviesList.push(adventure[moviesFrom]);
    }
    renderMovies(adventureMoviesList);
    navigationAdventure();

    
}