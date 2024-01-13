/* console.log(avyTest());
avyTest() */
let actionMoviesList = [];
// let actionMoviesListEXTRA = [];

let currentActionPages = 1;

let prevActionBTN;
let nextActionBTN; 
let currActionPage;
let totalActionPage;

function makeOtherPagesZeroAction(){
    currentAdventurePages = 1;
    currentAnimationPages = 1;
    currentComedyPages = 1
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
    actionGenreBTN.classList.add("active-tab"); 
}

let actionTimeOut;
function checkActionBUTTONS(){

    if(currentActionPages >= 2){
        prevActionBTN.disabled=false;
    } else {
        prevActionBTN.disabled = true;
    }
    if(currentActionPages >= totalActionPages){
        nextActionBTN.disabled = true;
    } else{
        nextActionBTN.disabled = false;
        
    }

}

/* function checkSearchButtons(){
    if(searchPage >= 2){
        prevBTN.disabled=false;
    } else {
        prevBTN.disabled = true;
    }
    console.log(searchPage, totalSearchPage)
    if(searchPage >= totalSearchPage){
        console.log("WHY NOt")
        nextBTN.disabled = true;
    } else{
        nextBTN.disabled = false;
        
    }
} */

function navigateActionNextt(){
    /* if(searchQueryBox.value != ""){
        searchPage++;
        
        searchMovies();
        
        currPage.innerHTML = searchPage;
        
        nextBTN.disabled = true;
        prevBTN.disabled = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkSearchButtons();
        }, 800)
    } else { */
        currentActionPages++;

        actionMoviesFunction();
        currActionPage.innerHTML = currentActionPages;
        nextActionBTN.disabled = true;
        prevActionBTN.disabled = true;
        clearTimeout(actionTimeOut);
        actionTimeOut = setTimeout(()=>{
            checkActionBUTTONS();
        }, 800)
    // }
    
}

function navigateActionPrevv(){
    /* if(searchQueryBox.value != ""){
        searchPage--;
        
        searchMovies();

        currPage.innerHTML = searchPage;

        nextBTN.disabled = true;
        prevBTN.disabled = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            checkSearchButtons();
        }, 800)
    } else{ */
        currentActionPages--;

        actionMoviesFunction();
        currActionPage.innerHTML = currentActionPages;
        nextActionBTN.disabled = true;
        prevActionBTN.disabled = true;
        clearTimeout(actionTimeOut);
        actionTimeOut = setTimeout(()=>{
            checkActionBUTTONS();
        }, 800)
    // }
    
}


function navigationAction(){
    // const moviesListPaginationELEMENT = document.querySelector(".movies-list-pagination")
    const doesPaginationExist = document.querySelector("#actionPagination");
    // console.log("doesPaginationExist", doesPaginationExist);
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="actionPagination";
        paginationDivva.innerHTML = `
        <button id="action-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="action-current-button" class="currentBTN"><span id="currActionPage">1</span> of <span id="totalActionPage">1</span></span>
            <button id="action-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevActionBTN = document.getElementById("action-prev-button");;
    nextActionBTN = document.getElementById("action-next-button");; 

    currActionPage = document.getElementById("currActionPage");
    totalActionPage = document.getElementById("totalActionPage");
    totalActionPage.innerHTML = totalActionPages;
    prevActionBTN.addEventListener("click", navigateActionPrevv);
    nextActionBTN.addEventListener("click", navigateActionNextt);
}
function actionMoviesFunction(){
    makeOtherPagesZeroAction();

    // console.log("hello")
    let moviesFrom = (currentActionPages - 1) * 20 ;
    let moviesTill = moviesFrom + 19;
    
    actionMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(action[moviesFrom] == null) {continue}
        actionMoviesList.push(action[moviesFrom]);
    }
    renderMovies(actionMoviesList);
    navigationAction();

    
}


// let currentActionPages = 0;
// let currentAdventurePages = 0;
// let currentAnimationPages = 0;
// let currentComedyPages = 0
// let currentCrimePages = 0;
// let currentDramaPages = 0;
// let currentFamilyPages = 0;
// let currentFantasyPages = 0;
// let currentHistoryPages = 0;
// let currentHorrorPages = 0;
// let currentMusicPages = 0;
// let currentysteryPages = 0;
// let currentRomancePages = 0;
// let currentSciFiPages = 0;
// let currentTVPages = 0;
// let currentThrillerPages = 0;
// let currentWarPages = 0;
// let currentWesternPages = 0;

/* function avyTest(){
    console.log("AAAAAAA")
    return 450;
} */