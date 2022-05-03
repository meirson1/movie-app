import React, {useState} from "react";
import "./Movie.css";
import ApiConfig from "../Api/ApiConfig";
import SwitchToggle from "../components/button/SwitchToggle";
import {Link} from "react-router-dom";
import movie from "./MovieIntreface";
import BaseModalWrapper from "../Modal/BaseModalWrapper";

const Movie = (movie: movie) => {
    const [isToggled, setIsToggled] = useState(Object(movie).isFavorite);
    const [isModalVisible,setIsModalVisible]=useState(false);
    const toggleModal=()=>{
        setIsModalVisible(wasModalVisible=>!wasModalVisible);
    }

    const setVoteClass = (vote: number) => {
        if (vote >= 7.2) {
            return "green";
        } else if (vote >= 6.1) {
            return "orange";
        } else {
            return "red";
        }
    }
    var text=movie.overview.substring(0,100)+'...';

    return (
        <div className="movie">
            <img className={"movie-img"}
                 src={ApiConfig.IMG_API + movie.poster_path}
                 alt={movie.title}
            />
            <div className="movie-info">
                <h3 className={"movie-info h3"}>{movie.title}</h3>
                <span className={`tag ${setVoteClass(parseFloat(movie.vote_average))}`}>{movie.vote_average}</span>
            </div>
            <div className="overview">
                <h2>{movie.title}</h2>
                <button onClick={toggleModal}>{text}</button>
                <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} header={movie.title} message={movie.overview}/>
                <br/>
                <br/>
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

export default Movie;