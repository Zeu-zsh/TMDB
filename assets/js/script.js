let searchImg = document.querySelector(".search img");
let searchInput = document.querySelector(".search input");

searchImg.addEventListener("click", searchChange);

function searchChange() {
    searchInput.classList.toggle('active');
    
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}