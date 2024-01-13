/* this JS file renders all the genres which you can click and sort movies according to genre */

    // <div class="tabs">
/* tabsDIVVA = document.querySelector(".tabs");
let actionGenreBTN 
let adventureGenreBTN
let animationGenreBTN
let comedyGenreBTN 
let crimeGenreBTN 
let dramaGenreBTN 
let familyGenreBTN 
let fantasyGenreBTN
let historyGenreBTN
let horrorGenreBTN 
let musicGenreBTN 
let mysteryGenreBTN
let romanceGenreBTN
let sciFiGenreBTN 
let tvMovieGenreBTN
let thrillerGenreBTN
let warGenreBTN 
let westernGenreBTN

let genreButtons;

const data = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];


        const genreIDARRAY ={};
        for(let i = 0; i < data.length; i++){
            const newButton = document.createElement("button");
            if(data[i].id == 99) continue;
            newButton.id = data[i].id;
            newButton.textContent = data[i].name;
            newButton.setAttribute("disabled", "true")
            newButton.classList.add("buttonsDisabled")
            tabsDIVVA.appendChild(newButton);
            genreIDARRAY[`${data[i].id}`]=data[i].name.replaceAll(" ", "-").toLowerCase();
        } */
/*         actionGenreBTN = document.getElementById("28");
        adventureGenreBTN = document.getElementById("12");
        animationGenreBTN = document.getElementById("16");
        comedyGenreBTN = document.getElementById("35");
        crimeGenreBTN = document.getElementById("80");
        dramaGenreBTN = document.getElementById("18");
        familyGenreBTN = document.getElementById("10751");
        fantasyGenreBTN = document.getElementById("14");
        historyGenreBTN = document.getElementById("36");
        horrorGenreBTN = document.getElementById("27");
        musicGenreBTN = document.getElementById("10402");
        mysteryGenreBTN = document.getElementById("9648");
        romanceGenreBTN = document.getElementById("10749");
        sciFiGenreBTN = document.getElementById("878");
        tvMovieGenreBTN = document.getElementById("10770");
        thrillerGenreBTN = document.getElementById("53");
        warGenreBTN = document.getElementById("10752");
        westernGenreBTN = document.getElementById("37");
        localStorage.setItem("genreID", JSON.stringify(genreIDARRAY))

        genreButtons = document.querySelectorAll(".buttonsDisabled"); */


        actionGenreBTN.addEventListener("click", actionMoviesFunction)
        adventureGenreBTN.addEventListener("click", adventureMoviesFunction)
        animationGenreBTN.addEventListener("click", animationMoviesFunction)
        comedyGenreBTN.addEventListener("click", comedyMoviesFunction)
        crimeGenreBTN.addEventListener("click", crimeMoviesFunction)
        dramaGenreBTN.addEventListener("click", dramaMoviesFunction);
        familyGenreBTN.addEventListener("click", familyMoviesFunction)
        fantasyGenreBTN.addEventListener("click", fantasyMoviesFunction)
        historyGenreBTN.addEventListener("click", historyMoviesFunction)
        horrorGenreBTN.addEventListener("click", horrorMoviesFunction)
        musicGenreBTN.addEventListener("click", musicMoviesFunction)
        mysteryGenreBTN.addEventListener("click", mysteryMoviesFunction)
        romanceGenreBTN.addEventListener("click", romanceMoviesFunction)
        sciFiGenreBTN.addEventListener("click", sciFiMoviesFunction)
        tvMovieGenreBTN.addEventListener("click", tvMovieMoviesFunction)
        thrillerGenreBTN.addEventListener("click", thrillerMoviesFunction)
        warGenreBTN.addEventListener("click", warMoviesFunction)
        westernGenreBTN.addEventListener("click", westernMoviesFunction)

        

        /* setTimeout(() => {
            actionGenreBTN.addEventListener("click", actionMoviesFunction)
        adventureGenreBTN.addEventListener("click", adventureMoviesFunction)
        animationGenreBTN.addEventListener("click", animationMoviesFunction)
        comedyGenreBTN.addEventListener("click", comedyMoviesFunction)
        crimeGenreBTN.addEventListener("click", crimeMoviesFunction)
        dramaGenreBTN.addEventListener("click", dramaMoviesFunction);
        familyGenreBTN.addEventListener("click", familyMoviesFunction)
        fantasyGenreBTN.addEventListener("click", fantasyMoviesFunction)
        historyGenreBTN.addEventListener("click", historyMoviesFunction)
        horrorGenreBTN.addEventListener("click", horrorMoviesFunction)
        musicGenreBTN.addEventListener("click", musicMoviesFunction)
        mysteryGenreBTN.addEventListener("click", mysteryMoviesFunction)
        romanceGenreBTN.addEventListener("click", romanceMoviesFunction)
        sciFiGenreBTN.addEventListener("click", sciFiMoviesFunction)
        tvMovieGenreBTN.addEventListener("click", tvMovieMoviesFunction)
        thrillerGenreBTN.addEventListener("click", thrillerMoviesFunction)
        warGenreBTN.addEventListener("click", warMoviesFunction)
        westernGenreBTN.addEventListener("click", westernMoviesFunction)
        }, 6000) */
        



