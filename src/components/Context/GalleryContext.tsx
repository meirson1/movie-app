import React, {useState, FC, useEffect} from "react";
import movie from "../../features/MovieIntreface";
import ApiConfig from "../../Api/ApiConfig";

export type GalleryContextType = {
    favoriteMovieList: movie[];
    historyMovieList: movie[];
    movieList: movie[];
    addMovieToList: (movie: movie) => void;
    addHistoryList: (movie: movie, amount: number) => void;
    homePageMovieList: (movie: movie) => void;
}

const FEATURED_API = ApiConfig.baseUrl + "discover/movie?sort_by=popularity.desc&api_key=" + ApiConfig.apiKey + "&page=1";

const defaultGallery: GalleryContextType = {
    favoriteMovieList: [],
    historyMovieList: [],
    movieList: [],
    addMovieToList: () => {
    },
    addHistoryList: () => {
    },
    homePageMovieList: () => {
    }
};

export const GalleryContext = React.createContext<GalleryContextType>(defaultGallery);


const GalleryProvider: FC<React.ReactNode> = ({children}) => {


    const [movies, setMovieApi] = useState<movie[]>([]);
    const [FavoriteList, setFavoriteList] = useState<movie[]>([])
    const [movieBoolean, setMovieBoolean] = useState<boolean>(false);
    const [movieHistory, setMovieHistory] = useState<string>("");
    const [movieTicket, setMovieTicket] = useState(100);
    const [HistoryList, setHistoryList] = useState<movie[]>([])

    useEffect(() => {
        fetch(FEATURED_API).then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.results.length; i++) {
                    data.results[i]["isFavorite"] = movieBoolean;
                    data.results[i]["purchaseDate"] = movieHistory;
                    data.results[i]["tickets"] = movieTicket;
                }
                setMovieApi(data.results)
            });
    }, [])


    const homePageMovieList = (movie: movie) => {
    }

    const addOrRemoveMovieToList = (movie: movie) => {
        const index = FavoriteList.map(movie => movie.id).indexOf(movie.id);
        if (index > -1) {
            FavoriteList.splice(index, 1);
            let indexOfNew = 0;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id === movie.id) {
                    indexOfNew = i;
                    break;
                }
            }
            movies[indexOfNew].isFavorite = false;
            setFavoriteList(FavoriteList);
        } else {
            let indexOfNew = 0;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id === movie.id) {
                    indexOfNew = i;
                    break;
                }
            }
            movies[indexOfNew].isFavorite = true;

            setFavoriteList([...FavoriteList, movies[indexOfNew]]);
        }
    };

    const addMovieToHistoryList = (movie: movie, amount: number) => {
        const index = HistoryList.map(movie => movie.id).indexOf(movie.id);
        let indexOfNew = 0;
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === movie.id) {
                indexOfNew = i;
                break;
            }
        }
        movies[indexOfNew].purchaseDate = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
        movies[indexOfNew].tickets = amount;
        if (index === -1) {
            setHistoryList([...HistoryList, movies[indexOfNew]]);
        }
    }


    return (
        <GalleryContext.Provider value={{
            favoriteMovieList: FavoriteList,
            historyMovieList: HistoryList,
            movieList: movies,
            addMovieToList: addOrRemoveMovieToList,
            addHistoryList: addMovieToHistoryList,
            homePageMovieList: homePageMovieList,
        }}>
            {children}
        </GalleryContext.Provider>
    )
}

export default GalleryProvider;