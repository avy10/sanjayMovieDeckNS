let horrorMoviesList = [];

let currentHorrorPages = 1;

let prevHorrorBTN;
let nextHorrorBTN; 
let currHorrorPage;
let totalHorrorPage;

function makeOtherPagesZeroHorror(){
    currentActionPages = 1;
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
    currentCrimePages = 1;
    currentDramaPages = 1;
    currentFamilyPages = 1;
    currentFantasyPages = 1;
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
    horrorGenreBTN.classList.add("active-tab"); 
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
    makeOtherPagesZeroHorror();
    let moviesFrom = (currentHorrorPages - 1) * 20;
    let moviesTill = moviesFrom + 19;
    
    horrorMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(horror[moviesFrom] == null) {continue}
        horrorMoviesList.push(horror[moviesFrom]);
    }
    renderMovies(horrorMoviesList);
    navigationHorror();
}

