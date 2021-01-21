// archivo de promesas no econtrado por lo que se utiliza este 

//funcion basica 
function getPopularMovies(){
    const url = ``;
    return fetch(url)
    .then(response=>response.json())
    .then(data=>data.results);
}


function getTopMoviesIds(n=3){
    return getPopularMovies().them(popularMovies=>
        popularMovies.slice(0,n).map(movie=>movie.id)
        );
}

///merjora con la promesa
//funcion basica 


async function getMovie(id){
    cosnt url = ``;
    const response = await fetch(url)
    const data = response .json());
    return data;
}



async function getPopularMovies(){
    const url = ``;
    return fetch(url)
    const data = await response.json()
    return data.results.json
    
}


async function getTopMoviesIds(n=3){
    try{
    const popularMovies = await getPopularMovies();
    const ids = popularMovies.slice(0,n).map(novie=> movie.id);
    return ids;

    } catch(error){
        console.error(error);
    }





    ///habliliar las aplicaciones 
    async function getTopMoviesInSecuence(){
        const ids = await getTopMoviesIds(3)
        const movies = []
        for (const id of ids){
            const movies = await getMovie(id)
            movies.push(movies)
        }
        
        return movies;
    }

    async function getTopMoviesInParallel(){
        const ids = await getTopMoviesIds(3);
        cosnt moviePromises = ids.map(id =>getMovie(id))

        const movies = Promise.all(moviePromises)

        return movies

    }
    async function getFastestTopMovie(){
        const ids = awaitgetTopMoviesIds()
        const moviePromises = id.map(id=>getMovie(id))
        const movie = await Promise.race(moviePromises)
    }



}