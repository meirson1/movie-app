import React, {useContext} from "react";
import {GalleryContext} from "../Context/GalleryContext";
import MovieFavoriteCard from "./MovieFavoriteCard";
import MovieHistoryCard from "./MovieHistoryCard";


const FavoritePage = () => {
    const ctx = useContext(GalleryContext);

    const movieFavorite = ctx.favoriteMovieList;
    const movieHistory = ctx.historyMovieList;

    return (
        <div>
            <div>
                <h1>Favorite List</h1>
                <div className={"movie-slider"}>
                    <div className={"movie-container-card"}>
                        {movieFavorite.map(movie => <MovieFavoriteCard key={movie.id}{...movie}/>)}
                    </div>
                </div>
            </div>
            <div>
                <h1>Purchase history</h1>
                <div className={"movie-slider"}>
                <div className={"movie-container-card"}>
                    {movieHistory.map(movie => <MovieHistoryCard key={movie.id}{...movie}/>)}
                </div>
                </div>
            </div>
        </div>
    );
}

export default FavoritePage;

//title
//SwitchToggle
//buy now
//poster_path