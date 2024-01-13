let familyMoviesList = [];

let currentFamilyPages = 1;

let prevFamilyBTN;
let nextFamilyBTN; 
let currFamilyPage;
let totalFamilyPage;

function makeOtherPagesZeroFamily(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
    currentCrimePages = 1;
    currentDramaPages = 1;
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
    familyGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroFamily();
    let moviesFrom = (currentFamilyPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    familyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(family[moviesFrom] == null) {continue}
        familyMoviesList.push(family[moviesFrom]);
    }
    renderMovies(familyMoviesList);
    navigationFamily();
}

