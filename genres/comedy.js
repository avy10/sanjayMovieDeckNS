let comedyMoviesList = [];

let currentComedyPages = 1;

let prevComedyBTN;
let nextComedyBTN; 
let currComedyPage;
let totalComedyPage;

function makeOtherPagesZeroComedy(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
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
    comedyGenreBTN.classList.add("active-tab"); 
}

let comedyTimeOut;
function checkComedyBUTTONS(){

    if(currentComedyPages >= 2){
        prevComedyBTN.disabled=false;
    } else {
        prevComedyBTN.disabled = true;
    }
    if(currentComedyPages >= totalComedyPages){
        nextComedyBTN.disabled = true;
    } else{
        nextComedyBTN.disabled = false;
        
    }

}
function navigateComedyNextt(){
        currentComedyPages++;

        comedyMoviesFunction();
        currComedyPage.innerHTML = currentComedyPages;
        nextComedyBTN.disabled = true;
        prevComedyBTN.disabled = true;
        clearTimeout(comedyTimeOut);
        comedyTimeOut = setTimeout(()=>{
            checkComedyBUTTONS();
        }, 800)
}

function navigateComedyPrevv(){
        currentComedyPages--;

        comedyMoviesFunction();
        currComedyPage.innerHTML = currentComedyPages;
        nextComedyBTN.disabled = true;
        prevComedyBTN.disabled = true;
        clearTimeout(comedyTimeOut);
        comedyTimeOut = setTimeout(()=>{
            checkComedyBUTTONS();
        }, 800)
}

function navigationComedy(){
    const doesPaginationExist = document.querySelector("#comedyPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="comedyPagination";
        paginationDivva.innerHTML = `
        <button id="comedy-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="comedy-current-button" class="currentBTN"><span id="currComedyPage">1</span> of <span id="totalComedyPage">1</span></span>
            <button id="comedy-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevComedyBTN = document.getElementById("comedy-prev-button");;
    nextComedyBTN = document.getElementById("comedy-next-button");; 

    currComedyPage = document.getElementById("currComedyPage");
    totalComedyPage = document.getElementById("totalComedyPage");
    totalComedyPage.innerHTML = totalComedyPages;
    prevComedyBTN.addEventListener("click", navigateComedyPrevv);
    nextComedyBTN.addEventListener("click", navigateComedyNextt);
}

function comedyMoviesFunction(){
    makeOtherPagesZeroComedy();
    // console.log("hello")
    let moviesFrom = (currentComedyPages - 1) * 20 ;
    let moviesTill = moviesFrom + 19;
    
    comedyMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(comedy[moviesFrom] == null) {continue}
        comedyMoviesList.push(comedy[moviesFrom]);
    }
    renderMovies(comedyMoviesList);
    navigationComedy();
}

