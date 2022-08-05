import React from 'react';
import MovieInfo from "../../components/movieInfo/MovieInfo";
import {useLocation} from "react-router";

const MoviesInfoPage = () => {
   const {state}=useLocation()


    return (
        <div>

            <MovieInfo state={state}/>

        </div>
    );
};

export default MoviesInfoPage;