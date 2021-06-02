import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    // if
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts={

    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,
    },

  }
  const handleClick =(movie) =>{
      if (trailerUrl){
          setTrailerUrl('');
      }
      else{
          console.log(movie.original_title)
          movieTrailer(movie?.original_title || "")
          .then((url)=> {
              const urlParams=new URLSearchParams(new URL(url).search)
              console.log(urlParams.get('v'));
              setTrailerUrl(urlParams.get('v'));
          })
          .catch((error) => console.log(error));
      }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters ">
        {/*several row__poster(s) */}
        {movies.map((movie) => (

          <img
          key={movie.id}
          onClick={()=>handleClick(movie)}
          className={`row__poster ${isLargeRow &&  "row__posterLarge"}`} 
          src={` ${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path }`} alt={movie.name} />
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}

    </div>
  );
};

export default Row;
