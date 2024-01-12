let crimeMoviesList = [];

let currentCrimePages = 0;

let prevCrimeBTN;
let nextCrimeBTN; 
let currCrimePage;
let totalCrimePage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
    currentComedyPages = 0
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

let crimeTimeOut;
function checkCrimeBUTTONS(){

    if(currentCrimePages >= 2){
        prevCrimeBTN.disabled=false;
    } else {
        prevCrimeBTN.disabled = true;
    }
    if(currentCrimePages >= totalCrimePages){
        nextCrimeBTN.disabled = true;
    } else{
        nextCrimeBTN.disabled = false;
        
    }

}
function navigateCrimeNextt(){
        currentCrimePages++;

        crimeMoviesFunction();
        currCrimePage.innerHTML = currentCrimePages;
        nextCrimeBTN.disabled = true;
        prevCrimeBTN.disabled = true;
        clearTimeout(crimeTimeOut);
        crimeTimeOut = setTimeout(()=>{
            checkCrimeBUTTONS();
        }, 800)
}

function navigateCrimePrevv(){
        currentCrimePages--;

        crimeMoviesFunction();
        currCrimePage.innerHTML = currentCrimePages;
        nextCrimeBTN.disabled = true;
        prevCrimeBTN.disabled = true;
        clearTimeout(crimeTimeOut);
        crimeTimeOut = setTimeout(()=>{
            checkCrimeBUTTONS();
        }, 800)
}

function navigationCrime(){
    const doesPaginationExist = document.querySelector("#crimePagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="crimePagination";
        paginationDivva.innerHTML = `
        <button id="crime-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="crime-current-button" class="currentBTN"><span id="currCrimePage">1</span> of <span id="totalCrimePage">1</span></span>
            <button id="crime-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevCrimeBTN = document.getElementById("crime-prev-button");
    nextCrimeBTN = document.getElementById("crime-next-button"); 

    currCrimePage = document.getElementById("currCrimePage");
    totalCrimePage = document.getElementById("totalCrimePage");
    totalCrimePage.innerHTML = totalAdventurePages; 
    prevCrimeBTN.addEventListener("click", navigateCrimePrevv);
    nextCrimeBTN.addEventListener("click", navigateCrimeNextt);
}

function crimeMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentCrimePages * 20 ;
    let moviesTill = moviesFrom + 19;
    
    crimeMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(crime[moviesFrom] == null) {continue}
        crimeMoviesList.push(crime[moviesFrom]);
    }
    renderMovies(crimeMoviesList);
    navigationCrime();
}

