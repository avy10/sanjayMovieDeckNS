let dramaMoviesList = [];

let currentDramaPages = 0;

let prevDramaBTN;
let nextDramaBTN; 
let currDramaPage;
let totalDramaPage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
    currentAnimationPages = 0;
    currentCrimePages = 0;
    currentComedyPages = 0
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

let dramaTimeOut;
function checkDramaBUTTONS(){

    if(currentDramaPages >= 2){
        prevDramaBTN.disabled=false;
    } else {
        prevDramaBTN.disabled = true;
    }
    if(currentDramaPages >= totalDramaPages){
        nextDramaBTN.disabled = true;
    } else{
        nextDramaBTN.disabled = false;
        
    }

}
function navigateDramaNextt(){
        currentDramaPages++;

        dramaMoviesFunction();
        currDramaPage.innerHTML = currentDramaPages;
        nextDramaBTN.disabled = true;
        prevDramaBTN.disabled = true;
        clearTimeout(dramaTimeOut);
        dramaTimeOut = setTimeout(()=>{
            checkDramaBUTTONS();
        }, 800)
}

function navigateDramaPrevv(){
        currentDramaPages--;

        dramaMoviesFunction();
        currDramaPage.innerHTML = currentDramaPages;
        nextDramaBTN.disabled = true;
        prevDramaBTN.disabled = true;
        clearTimeout(dramaTimeOut);
        dramaTimeOut = setTimeout(()=>{
            checkDramaBUTTONS();
        }, 800)
}

function navigationDrama(){
    const doesPaginationExist = document.querySelector("#dramaPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="dramaPagination";
        paginationDivva.innerHTML = `
        <button id="drama-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="drama-current-button" class="currentBTN"><span id="currDramaPage">1</span> of <span id="totalDramaPage">1</span></span>
            <button id="drama-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `;
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevDramaBTN = document.getElementById("drama-prev-button");
    nextDramaBTN = document.getElementById("drama-next-button"); 

    currDramaPage = document.getElementById("currDramaPage");
    totalDramaPage = document.getElementById("totalDramaPage");
    totalDramaPage.innerHTML = totalDramaPages; 
    prevDramaBTN.addEventListener("click", navigateDramaPrevv);
    nextDramaBTN.addEventListener("click", navigateDramaNextt);
}

function dramaMoviesFunction(){
    makeOtherPagesZero();
    let moviesFrom = currentDramaPages * 20;
    let moviesTill = moviesFrom + 19;
    
    dramaMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(drama[moviesFrom] == null) {continue}
        dramaMoviesList.push(drama[moviesFrom]);
    }
    renderMovies(dramaMoviesList);
    navigationDrama();
}
