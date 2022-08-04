import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";

const MoviesFilterGenre = ({id}) => {

    const dispatch = useDispatch();

    const {moviesFilter} = useSelector(state => state.movies);

   useEffect(()=>{
       dispatch(moviesActions.getFilterMovies())
   },[])
    {moviesFilter.map(value=><div>{value.title}</div>)}
    ;
console.log(moviesFilter.genre_ids)
    return (
        <div>

            {moviesFilter.filter(movie=>movie.genre_ids===id.id).map(value=><div>{value.title}</div>)}

        </div>
    );
};

export default MoviesFilterGenre;