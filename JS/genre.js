/* this JS file renders all the genres which you can click and sort movies according to genre */

    // <div class="tabs">
const tabsDIVVA = document.querySelector(".tabs");
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
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=024c2acdba0f8d056b15281072c1a833`)
    .then(response => response.json())
    .then(data => {
        console.log("GENRES", data);
        const genreIDARRAY ={};
        for(let i = 0; i < data.genres.length; i++){
            const newButton = document.createElement("button");
            if(data.genres[i].id == 99) continue;
            newButton.id = data.genres[i].id;
            newButton.textContent = data.genres[i].name;
            tabsDIVVA.appendChild(newButton);
            genreIDARRAY[`${data.genres[i].id}`]=data.genres[i].name.replaceAll(" ", "-").toLowerCase();
        }
        actionGenreBTN = document.getElementById("28");
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

        actionGenreBTN.addEventListener("click", whaet)
                
    
    })


