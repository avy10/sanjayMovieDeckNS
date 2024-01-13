let dramaMoviesList = [];

let currentDramaPages = 1;

let prevDramaBTN;
let nextDramaBTN; 
let currDramaPage;
let totalDramaPage;

function makeOtherPagesZeroDrama(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
    currentCrimePages = 1;
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
    dramaGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroDrama();
    let moviesFrom = (currentDramaPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    dramaMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(drama[moviesFrom] == null) {continue}
        dramaMoviesList.push(drama[moviesFrom]);
    }
    renderMovies(dramaMoviesList);
    navigationDrama();
}
