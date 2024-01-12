let animationMoviesList = [];

let currentAnimationPages = 1;

let prevAnimationBTN;
let nextAnimationBTN; 
let currAnimationPage;
let totalAnimationPage;

function makeOtherPagesZero(){
    currentActionPages = 0;
    currentAdventurePages = 0;
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

let aanimationTimeOut;
function checkAnimationBUTTONS(){

    if(currentAnimationPages >= 2){
        prevAnimationBTN.disabled=false;
    } else {
        prevAnimationBTN.disabled = true;
    }
    if(currentAnimationPages >= totalAnimationPages){
        nextAnimationBTN.disabled = true;
    } else{
        nextAnimationBTN.disabled = false;
        
    }

}
function navigateAnimationNextt(){
        currentAnimationPages++;

        animationMoviesFunction();
        currAnimationPage.innerHTML = currentAnimationPages;
        nextAnimationBTN.disabled = true;
        prevAnimationBTN.disabled = true;
        clearTimeout(aanimationTimeOut);
        aanimationTimeOut = setTimeout(()=>{
            checkAnimationBUTTONS();
        }, 800)
}

function navigateAnimationPrevv(){
        currentAnimationPages--;

        animationMoviesFunction();
        currAnimationPage.innerHTML = currentAnimationPages;
        nextAnimationBTN.disabled = true;
        prevAnimationBTN.disabled = true;
        clearTimeout(aanimationTimeOut);
        aanimationTimeOut = setTimeout(()=>{
            checkAnimationBUTTONS();
        }, 800)
}

function navigationAnimation(){
    const doesPaginationExist = document.querySelector("#animationPagination");
    if(!doesPaginationExist){
        navigationAvyDIVVA.innerHTML = ""
        const paginationDivva = document.createElement("div");
        paginationDivva.className="pagination";
        paginationDivva.id="animationPagination";
        paginationDivva.innerHTML = `
        <button id="animation-prev-button" class="prevBTN" disabled><span style='font-size:20px;'>&#11164;</span></button>
            <span id="animation-current-button" class="currentBTN"><span id="currAnimationPage">1</span> of <span id="totalAnimationPage">1</span></span>
            <button id="animation-next-button" class="nextBTN"><span style='font-size:20px;'>&#11166;</span></button>
        `
    // moviesListPaginationELEMENT.appendChild(paginationDivva);
    navigationAvyDIVVA.appendChild(paginationDivva);
    }

    prevAnimationBTN = document.getElementById("animation-prev-button");;
    nextAnimationBTN = document.getElementById("animation-next-button");; 

    currAnimationPage = document.getElementById("currAnimationPage");
    totalAnimationPage = document.getElementById("totalAnimationPage");
    totalAnimationPage.innerHTML = totalAdventurePages;
    prevAnimationBTN.addEventListener("click", navigateAnimationPrevv);
    nextAnimationBTN.addEventListener("click", navigateAnimationNextt);
}

function animationMoviesFunction(){
    makeOtherPagesZero();
    // console.log("hello")
    let moviesFrom = currentAnimationPages * 20 + 1;
    let moviesTill = moviesFrom + 19;
    
    animationMoviesList = [];
    for(moviesFrom; moviesFrom <= moviesTill; moviesFrom++){
        if(animation[moviesFrom] == null) {continue}
        animationMoviesList.push(animation[moviesFrom]);
    }
    renderMovies(animationMoviesList);
    navigationAdventure();

    
}