import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import StarsRating from "../starsRating/StarsRating";
import MoviesListCard from "../moviesListCard/MoviesListCard";

const MoviesList = () => {
    const {movies, page, pagePrev} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))


    }, [dispatch, query]);

    const [pageNumber, setPageNumber] = useState(1)

    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`})
        setPageNumber(page)
    };
    console.log(pageNumber)

    const nextPage = () => {
            const page = +query.get('page') + 1;
            setQuery({page: `${page}`})
            setPageNumber(page)
        }

    ;
    console.log(query)


    return (


    <div>
        <button  onClick={prevPage}>prevPage</button>
        <button disabled={pageNumber > 499} onClick={nextPage}>nextPage</button>


        {/*<button disabled={pageNumber<2} onClick={prevPage}>prevPage</button>*/}
        {/*<button disabled={pageNumber > 499} onClick={nextPage}>nextPage</button>*/}
        {movies.map(value =>
            <div>
                {/*<PosterPreview key={value.id} poster={value.poster_path}/>*/}
                {JSON.stringify(value)}
                {/*<StarsRating key={value.vote_count} rating={value.vote_average} alt={value.title}/>*/}
            </div>)}


        {/*<MoviesListCard/>*/}
    </div>
)
    ;
};

export default MoviesList;