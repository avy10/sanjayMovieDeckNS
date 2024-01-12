
let actionMoviesList = [];
// let actionMoviesListEXTRA = [];

let currentActionPages = 0;

let prevActionBTN;
let nextActionBTN; 


function makeOtherPagesZero(){
    currentAdventurePages = 0;
    currentAnimationPages = 0;
    currentComedyPages = 0
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
function navigationAction(){
    const moviesListPaginationELEMENT = document.querySelector(".movies-list-pagination")
    const doesPaginationExist = document.querySelector("#actionPagination");
    // console.log("doesPaginationExist", doesPaginationExist);
    if(!doesPaginationExist){
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="actionPagination";
        paginationDivva.innerHTML = `
        <button id="action-prev-button" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="action-current-button"><span id="currActionPage">1</span> of <span id="totalActionPage">1</span></span>
            <button id="action-next-button"><span style='font-size:20px;'>&#11166;</span></button>
        `
    moviesListPaginationELEMENT.appendChild(paginationDivva);
    }

    prevActionBTN = document.getElementById("action-prev-button");;
    nextActionBTN = document.getElementById("action-next-button");; 

    currPage = document.getElementById("currActionPage");
    tPage = document.getElementById("totalActionPage");

    prevBTN.addEventListener("click", navigateActionPrevv);
    extBTN.addEventListener("click", navigateActionNextt);
}
function actionMoviesFunction(){
    makeOtherPagesZero();
    console.log("hello")
    let moviesFrom = currentActionPages * 20 + 1;
    let moviesTill = moviesFrom + 19;
    
    actionMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        actionMoviesList.push(action[moviesFrom]);
    }
    renderMovies(actionMoviesList);
    navigationAction();

    currentActionPages++;
    
}



let currentAdventurePages = 0;
let currentAnimationPages = 0;
let currentComedyPages = 0
let currentCrimePages = 0;
let currentDramaPages = 0;
let currentFamilyPages = 0;
let currentFantasyPages = 0;
let currentHistoryPages = 0;
let currentHorrorPages = 0;
let currentMusicPages = 0;
let currentysteryPages = 0;
let currentRomancePages = 0;
let currentSciFiPages = 0;
let currentTVPages = 0;
let currentThrillerPages = 0;
let currentWarPages = 0;
let currentWesternPages = 0;