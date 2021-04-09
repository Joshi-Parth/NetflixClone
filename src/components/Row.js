import React, {useState, useEffect} from 'react';
import axios from '../axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url_img = "https://image.tmdb.org/t/p/w500"

 
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        };

        fetchData();
    }, [fetchUrl])

    // console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

  

    const handleOnClick = (movie) => {
        console.log(movie);
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.original_title || movie?.title || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => alert("Trailer Not found"))
        }
    }


    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                     return <img
                            onClick={() => handleOnClick(movie)} 
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url_img}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} />
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
