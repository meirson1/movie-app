import React, {FC} from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import FavoritePage from "./components/pages/FavoritePage";
import Header from "./components/pages/Header";
import MoviePage from "./components/pages/MoviePage";
import Thankyou from "./components/pages/Thankyou";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate replace to='/HomePage'/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/FavoritePage" element={<FavoritePage/>}/>
                <Route path="/MoviePage/movie/:id" element={<MoviePage/>}/>
                <Route path="/Thankyou" element={<Thankyou/>}/>
            </Routes>
        </>
    )

};

export default App;