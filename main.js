// search event listener
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

// search functionality

const  search=async() =>{
    const input = await searchInput.value;
    const arrWords = [];
    var word = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            word.push(input[i]);
        } else {
            arrWords.push(word.join(''));
            word = [];
        }
    }

    if (word.length > 0) {
        arrWords.push(word.join(''));
    }

    var finalSearch = `https://www.google.com/search?q=${encodeURIComponent(arrWords[0])}`;

    for (let i = 1; i < arrWords.length; i++) {
        finalSearch += `+${encodeURIComponent(arrWords[i])}`;
    }

    window.location.href = finalSearch;
}