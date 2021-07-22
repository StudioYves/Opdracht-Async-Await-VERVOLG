const API_KEY = "69c116d4caa17ae254e4f845a40c084d";

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(apiUrl, {method: "GET"})
        const jsonResponseData = await response.json();
        console.log("This is all data out of Json:", jsonResponseData);
        return jsonResponseData;
    } catch (error) {
        console.log(error)
    }
}


const getBestMovieById = async function () {
    const movieById = `https://api.themoviedb.org/3/find/{external_id}?api_key=${API_KEY}`;
    try {
        const response = await fetch(movieById, {method: "GET"})
        const jsonResponseData = await response.json();
        console.log("This is all data out of Json:", jsonResponseData);
        return jsonResponseData;
    } catch (error) {
        console.log(error)
    }
}

