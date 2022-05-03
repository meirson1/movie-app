import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import ApiConfig from "../../Api/ApiConfig";
import "./MoviePage.css"
import {GalleryContext} from "../Context/GalleryContext";
import movie from "../../features/MovieIntreface";

const MoviePage = () => {
    const {id} = useParams();
    const FeaturedApi = ApiConfig.baseUrl + "movie/" + `${id}` + "?api_key=" + ApiConfig.apiKey;
    const [movie, setMovie] = useState<movie>();

    useEffect(() => {
        fetch(FeaturedApi).then(res => res.json())
            .then(data => {
                setMovie(data);
            });
    }, []);

    const ctx = useContext(GalleryContext);
    var index=0;
    if (movie!==undefined){
        for (let i = 0; i < ctx.movieList.length; i++) {
            if (ctx.movieList[i].id === movie.id) {
                index=i;
                break;
            }
        }
    }
    var AmountOfTickets = ctx.movieList[index].tickets;



    const setAmountTickets = () => {
        const selectElement = (document.getElementById("select")) as HTMLSelectElement;
        var amount=selectElement.selectedIndex+1;
        amount=AmountOfTickets-amount;
        ctx.addHistoryList(Object(movie),amount);
    }



    return (
        <div className={"moviePage"}
             style={
                 {backgroundImage: `url(${ApiConfig.IMG_API + Object(movie).poster_path})`}
             }>
            <div>
                <h1>
                    {Object(movie).original_title}
                </h1>
                <h2 className={"glow"}>
                    <h3>About</h3>
                    {Object(movie).overview}
                </h2>
                <h2>
                    18+
                </h2>
                <h2>
                    Release date: {Object(movie).release_date}
                </h2>
                <div>
                    <h2>
                        Remaining tickets : {AmountOfTickets}
                    </h2>
                </div>
                <div className={"MoviePageBody"}>
                    <h2>
                        Select tickets to buy :
                    </h2>
                    <div>
                        <h2>
                            <div className={"selectDiv"}>
                                <Link className={"buttonMovie"}
                                      to={"/Thankyou"}
                                      onClick={setAmountTickets}>Buy now</Link>
                                <select id="select">
                                    {<option value={1}>1</option>}
                                    {<option value={2}>2</option>}
                                    {<option value={3}>3</option>}
                                    {<option value={4}>4</option>}
                                </select>
                                <div/>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;