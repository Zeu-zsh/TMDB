const url = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVjMGM4NDM5OWQyMDJhODAyNjdlM2RlNDBlZjEzZCIsIm5iZiI6MTczNDMzODA0MS4zOTEsInN1YiI6IjY3NWZlNWY5ZDYzMTNjNzk1MjQxODcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SGWeid9nuBnkks0oE6eT2b53twtec2jyk0L5noMM67E',
    },
};

fetch(url, options)
    .then(response => response.json())
    .then(json => {
        const popularList = document.querySelector(".popular-list");

        json.results.slice(0, 20).forEach(movie => {
            const container = document.createElement("div");
            container.className = "movie-container";

            const imageDiv = document.createElement("div");
            const titleRatingDiv = document.createElement("div");
            const movieStar = document.createElement("span");
            const movieDiv = document.createElement("div");
            const movieTitle = document.createElement("h3");

            imageDiv.className = "card-img";
            titleRatingDiv.className = "title-rating";
            movieDiv.className = "card-content";

            imageDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`;
            movieTitle.textContent = movie.title;
            movieStar.textContent = `тнР ${movie.vote_average.toFixed(1)}/10`;

            titleRatingDiv.appendChild(movieTitle);
            titleRatingDiv.appendChild(movieStar);
            movieDiv.appendChild(titleRatingDiv);
            container.appendChild(imageDiv);
            container.appendChild(movieDiv);
            popularList.appendChild(container);
        });
    })
    .catch(err => console.error('Erreur:', err));



    let searchImg = document.querySelector(".search img");
    let searchInput = document.querySelector(".search input");
    
    searchImg.addEventListener("click", searchChange);
    
    function searchChange() {
        searchInput.classList.toggle('active');
    
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    }

let right = document.querySelector("#arrow-right");
let left = document.querySelector("#arrow-left");
let popularListContainer = document.querySelector(".popular-list-container");

right.addEventListener("click", function() {
    popularListContainer.scrollLeft += 700;
});

left.addEventListener("click", function() {
    popularListContainer.scrollLeft -= 700;
});