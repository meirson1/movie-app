import React, {useContext} from "react";
import Movie from "../../features/Movie";
import "./HomePage.css";
import {GalleryContext} from "../Context/GalleryContext";


const HomePage = () => {
    const ctx=useContext(GalleryContext);
    const movieList=ctx.movieList;
    return (
        <div className="movie-container">
            {movieList.map(movie => <Movie {...movie}/>)}
        </div>
    );
}

export default HomePage;