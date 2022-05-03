import React from "react";
import "../../features/Movie.css";
import ApiConfig from "../../Api/ApiConfig";
import movie from "../../features/MovieIntreface";

const MovieHistoryCard = (movie: movie) => {
    return (
        <div className="movie">
            <img className={"movie-img"}
                 src={ApiConfig.IMG_API + movie.poster_path}
                 alt={movie.title}
            />
            <div className="overview">
                <h2>
                    {movie.title}
                </h2>
                <div>
                Date of purchase:
                </div>
                {movie.purchaseDate}
            </div>
        </div>
    )
}

export default MovieHistoryCard;