
let actionMoviesList = [];
// let actionMoviesListEXTRA = [];

let currentActionPages = 0;

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