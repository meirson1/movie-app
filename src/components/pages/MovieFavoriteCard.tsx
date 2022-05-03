import React, {useState} from "react";
import "../../features/Movie.css";
import ApiConfig from "../../Api/ApiConfig";
import SwitchToggle from "../button/SwitchToggle";
import {Link} from "react-router-dom";
import movie from "../../features/MovieIntreface";

const MovieFavoriteCard = (movie: movie) => {
    const [isToggled, setIsToggled] = useState(Object(movie).isFavorite);

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
                <div className={"h1"}>
                    <h3>
                        <Link className={"button"} to={`/MoviePage/movie/${movie.id}`}>More info</Link>
                    </h3>
                    <h5>Add To Favorite!</h5>
                    <SwitchToggle
                        rounded={true}
                        key={movie.title}
                        onToggle={() => setIsToggled(!isToggled)}
                        data={movie}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieFavoriteCard;