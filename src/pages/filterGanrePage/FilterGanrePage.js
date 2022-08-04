import React from 'react';
import {useParams} from "react-router";
import MoviesFilterGenre from "../../components/moviesFilterGenre/MoviesFilterGenre";

const FilterGanrePage = () => {
    const params = useParams();
    const {id}=params
    console.log(id)

    return (
        <div>
            <MoviesFilterGenre id={id}/>


            
        </div>
    );
};

export default FilterGanrePage;