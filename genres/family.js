let familyMoviesList = [];

let currentFamilyPages = 0;

let prevFamilyBTN;
let nextFamilyBTN; 
let currFamilyPage;
let totalFamilyPage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
    currentAnimationPages = 0;
    currentComedyPages = 0
    currentCrimePages = 0;
    currentDramaPages = 0;
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

let familyTimeOut;
function checkFamilyBUTTONS(){

    if(currentFamilyPages >= 2){
        prevFamilyBTN.disabled=false;
    } else {
        prevFamilyBTN.disabled = true;
    }
    if(currentFamilyPages >= totalFamilyPages){
        nextFamilyBTN.disabled = true;
    } else{
        nextFamilyBTN.disabled = false;
        
    }

}
function navigateFamilyNextt(){
        currentFamilyPages++;

        familyMoviesFunction();
        currFamilyPage.innerHTML = currentFamilyPages;
        nextFamilyBTN.disabled = true;
        prevFamilyBTN.disabled = true;
        clearTimeout(familyTimeOut);
        familyTimeOut = setTimeout(()=>{
            checkFamilyBUTTONS();
        }, 800)
}

function navigateFamilyPrevv(){
        currentFamilyPages--;

        familyMoviesFunction();
        currFamilyPage.innerHTML = currentFamilyPages;
        nextFamilyBTN.disabled = true;
        prevFamilyBTN.disabled = true;
        clearTimeout(familyTimeOut);
        familyTimeOut = setTimeout(()=>{
            checkFamilyBUTTONS();
        }, 800)
}

function navigationFamily(){
    const doesPaginationExist = document.querySelector("#familyPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="familyPagination";
        paginationDivva.innerHTML = `
        <button id="family-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="family-current-button" class="currentBTN"><span id="currFamilyPage">1</span> of <span id="totalFamilyPage">1</span></span>
            <button id="family-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevFamilyBTN = document.getElementById("family-prev-button");
    nextFamilyBTN = document.getElementById("family-next-button"); 

    currFamilyPage = document.getElementById("currFamilyPage");
    totalFamilyPage = document.getElementById("totalFamilyPage");
    totalFamilyPage.innerHTML = totalFamilyPages; 
    prevFamilyBTN.addEventListener("click", navigateFamilyPrevv);
    nextFamilyBTN.addEventListener("click", navigateFamilyNextt);
}

function familyMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentFamilyPages * 20;
    let moviesTill = moviesFrom + 19;
    
    familyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(family[moviesFrom] == null) {continue}
        familyMoviesList.push(family[moviesFrom]);
    }
    renderMovies(familyMoviesList);
    navigationFamily();
}

