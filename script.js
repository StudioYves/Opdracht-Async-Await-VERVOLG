// DEEL 1: OPDRACHT 1 >>> LIST OF MOVIE GENRES

const getMovieGenres = async function () {
    const genreList = document.getElementById("moviegenres");
    const data = await getData();
    data.genres.forEach(item => {
        const newListElement = document.createElement("li");
        const listContent = document.createTextNode(`genre naam: ${item.name}, id:${item.id}`);
        genreList.appendChild(newListElement);
        newListElement.appendChild(listContent);
    })
}

getMovieGenres();



//DEEL 1: OPDRACHT 2

const getBestMovie = async function () {
    const bestMovieList = document.getElementById("best");
    const gegevens = await getBestMovieById("tt6105098");
    gegevens.name(item => {
        const newListElement = document.createElement("li");
        const listContent = document.createTextNode(item.name);
        genreList.appendChild(newListElement);
        newListElement.appendChild(listContent);
    })
}

getBestMovie();





