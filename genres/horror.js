let horrorMoviesList = [];

let currentHorrorPages = 0;

let prevHorrorBTN;
let nextHorrorBTN; 
let currHorrorPage;
let totalHorrorPage;

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
    currentMusicPages = 0;
    currentysteryPages = 0;
    currentRomancePages = 0;
    currentSciFiPages = 0;
    currentTVPages = 0;
    currentThrillerPages = 0;
    currentWarPages = 0;
    currentWesternPages = 0;
}

let horrorTimeOut;
function checkHorrorBUTTONS(){

    if(currentHorrorPages >= 2){
        prevHorrorBTN.disabled=false;
    } else {
        prevHorrorBTN.disabled = true;
    }
    if(currentHorrorPages >= totalHorrorPages){
        nextHorrorBTN.disabled = true;
    } else{
        nextHorrorBTN.disabled = false;
        
    }

}
function navigateHorrorNextt(){
        currentHorrorPages++;

        horrorMoviesFunction();
        currHorrorPage.innerHTML = currentHorrorPages;
        nextHorrorBTN.disabled = true;
        prevHorrorBTN.disabled = true;
        clearTimeout(horrorTimeOut);
        horrorTimeOut = setTimeout(()=>{
            checkHorrorBUTTONS();
        }, 800)
}

function navigateHorrorPrevv(){
        currentHorrorPages--;

        horrorMoviesFunction();
        currHorrorPage.innerHTML = currentHorrorPages;
        nextHorrorBTN.disabled = true;
        prevHorrorBTN.disabled = true;
        clearTimeout(horrorTimeOut);
        horrorTimeOut = setTimeout(()=>{
            checkHorrorBUTTONS();
        }, 800)
}

function navigationHorror(){
    const doesPaginationExist = document.querySelector("#horrorPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="horrorPagination";
        paginationDivva.innerHTML = `
        <button id="horror-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="horror-current-button" class="currentBTN"><span id="currHorrorPage">1</span> of <span id="totalHorrorPage">1</span></span>
            <button id="horror-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevHorrorBTN = document.getElementById("horror-prev-button");
    nextHorrorBTN = document.getElementById("horror-next-button"); 

    currHorrorPage = document.getElementById("currHorrorPage");
    totalHorrorPage = document.getElementById("totalHorrorPage");
    totalHorrorPage.innerHTML = totalHorrorPages; 
    prevHorrorBTN.addEventListener("click", navigateHorrorPrevv);
    nextHorrorBTN.addEventListener("click", navigateHorrorNextt);
}

function horrorMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentHorrorPages * 20;
    let moviesTill = moviesFrom + 19;
    
    horrorMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(horror[moviesFrom] == null) {continue}
        horrorMoviesList.push(horror[moviesFrom]);
    }
    renderMovies(horrorMoviesList);
    navigationHorror();
}

