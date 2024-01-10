/* this JS file renders all the genres which you can click and sort movies according to genre */

    // <div class="tabs">
const tabsDIVVA = document.querySelector(".tabs");

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=024c2acdba0f8d056b15281072c1a833`)
    .then(response => response.json())
    .then(data => {
        console.log("GENRES", data);
        const genreIDARRAY ={};
        for(let i = 0; i < data.genres.length; i++){
            const newButton = document.createElement("button");
            newButton.id = data.genres[i].id;
            newButton.textContent = data.genres[i].name;
            tabsDIVVA.appendChild(newButton);
            genreIDARRAY[`${data.genres[i].id}`]=data.genres[i].name;
        }
        localStorage.setItem("genreID", JSON.stringify(genreIDARRAY))
    })