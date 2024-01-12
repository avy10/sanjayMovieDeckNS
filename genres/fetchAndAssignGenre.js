let action = []
let adventure = []
let animation = []
let comedy = []
let crime = []
let documentary = []
let drama = []
let family = []
let fantasy = []
let history = []
let horror = []
let music = []
let mystery = []
let romance = []
let scienceFiction = []
let tvMovie = []
let thriller = []
let war = []
let western = []

const APIKEYRR = `024c2acdba0f8d056b15281072c1a833`; // this is my own API key

async function fetchMoviesINTOGENRES(){
    const truth = JSON.parse(localStorage.getItem("hasFullAPI"))

    if(truth){
        console.log("wtrf")
        const genreButtons = document.querySelectorAll(".buttonsDisabled");
        for(let i = 0; i < genreButtons.length; i++){
            genreButtons[i].classList.remove("buttonsDisabled")
            genreButtons[i].classList.add("buttonsEnabled")
            // genreButtons[i].disabled = "false";
            genreButtons[i].removeAttribute("disabled")
        }
        return;
    } else {
        try{
            for(let i = 1; i <= 454; i++){
                
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEYRR}&language=en-US&page=${i}`);
                let data = await response.json();

                data.results.forEach(element => {
                    element.genre_ids.forEach(e => {
                        if(e == 12){
                            adventure.push(element);
                        }
                        if(e == 14){
                            fantasy.push(element);
                        }
                        if(e == 16){
                            animation.push(element);
                        }
                        if(e == 18){
                            drama.push(element);
                        }
                        if(e == 27){
                            horror.push(element);
                        }
                        if(e == 28){
                            action.push(element);
                        }
                        if(e == 35){
                            comedy.push(element);
                        }
                        if(e == 36){
                            history.push(element);
                        }
                        if(e == 37){
                            western.push(element);
                        }
                        if(e == 12){
                            adventure.push(element);
                        }
                        if(e == 53){
                            thriller.push(element);
                        }
                        if(e == 80){
                            crime.push(element);
                        }
                        if(e == 99){
                            documentary.push(element);
                        }
                        if(e == 878){
                            scienceFiction.push(element);
                        }
                        if(e == 9648){
                            mystery.push(element);
                        }
                        if(e == 10402){
                            music.push(element);
                        }
                        if(e == 10749){
                            romance.push(element);
                        }
                        if(e == 10751){
                            family.push(element);
                        }
                        if(e == 10752){
                            war.push(element);
                        }
                        if(e == 10770){
                            tvMovie.push(element);
                        }
                        
                    });
                });
            }
            localStorage.setItem("hasFullAPI", "true");
            const genreButtons = document.querySelectorAll(".buttonsDisabled");
            for(let i = 0; i < genreButtons.length; i++){
                genreButtons[i].classList.remove("buttonsDisabled")
                genreButtons[i].classList.add("buttonsEnabled")
                genreButtons[i].removeAttribute("disabled")
            }
        } catch(error){
            console.log(error);
        }
    }
    
}

fetchMoviesINTOGENRES();
