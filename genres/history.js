let historyMoviesList = [];

let currentHistoryPages = 0;

let prevHistoryBTN;
let nextHistoryBTN; 
let currHistoryPage;
let totalHistoryPage;

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

let historyTimeOut;
function checkHistoryBUTTONS(){

    if(currentHistoryPages >= 2){
        prevHistoryBTN.disabled=false;
    } else {
        prevHistoryBTN.disabled = true;
    }
    if(currentHistoryPages >= totalHistoryPages){
        nextHistoryBTN.disabled = true;
    } else{
        nextHistoryBTN.disabled = false;
        
    }

}
function navigateHistoryNextt(){
        currentHistoryPages++;

        historyMoviesFunction();
        currHistoryPage.innerHTML = currentHistoryPages;
        nextHistoryBTN.disabled = true;
        prevHistoryBTN.disabled = true;
        clearTimeout(historyTimeOut);
        historyTimeOut = setTimeout(()=>{
            checkHistoryBUTTONS();
        }, 800)
}

function navigateHistoryPrevv(){
        currentHistoryPages--;

        historyMoviesFunction();
        currHistoryPage.innerHTML = currentHistoryPages;
        nextHistoryBTN.disabled = true;
        prevHistoryBTN.disabled = true;
        clearTimeout(historyTimeOut);
        historyTimeOut = setTimeout(()=>{
            checkHistoryBUTTONS();
        }, 800)
}

function navigationHistory(){
    const doesPaginationExist = document.querySelector("#historyPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="historyPagination";
        paginationDivva.innerHTML = `
        <button id="history-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="history-current-button" class="currentBTN"><span id="currHistoryPage">1</span> of <span id="totalHistoryPage">1</span></span>
            <button id="history-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevHistoryBTN = document.getElementById("history-prev-button");
    nextHistoryBTN = document.getElementById("history-next-button"); 

    currHistoryPage = document.getElementById("currHistoryPage");
    totalHistoryPage = document.getElementById("totalHistoryPage");
    totalHistoryPage.innerHTML = totalHistoryPages; 
    prevHistoryBTN.addEventListener("click", navigateHistoryPrevv);
    nextHistoryBTN.addEventListener("click", navigateHistoryNextt);
}

function historyMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentHistoryPages * 20;
    let moviesTill = moviesFrom + 19;
    
    historyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(history[moviesFrom] == null) {continue}
        historyMoviesList.push(history[moviesFrom]);
    }
    renderMovies(historyMoviesList);
    navigationHistory();
}

