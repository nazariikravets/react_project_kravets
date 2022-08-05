import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import './MoviesListCard.css'
import {moviesActions} from "../../redux";
import PosterPreview from "../posterPreview/PosterPreview";
import StarsRating from "../starsRating/StarsRating";

const MoviesListCard = () => {

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState(1)


    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [dispatch, query]);


    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`})
        setPageNumber(page)
    };

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`})
        setPageNumber(page)
    };


    return (
        <div >
            <button disabled={pageNumber<2} onClick={prevPage}>prevPage</button>
            <button disabled={pageNumber > 499} onClick={nextPage}>nextPage</button>
            <div className={'Movie'}>
                {movies.map(value =>
                    <Link to={`${value.id}`} state={value}>
                        <div className={'card'}>
                            <PosterPreview key={value.id} poster={value.poster_path} alt={value.title}/>
                            <div>{value.title}</div>
                        </div>
                        <StarsRating key={value.vote_count} rating={value.vote_average}/>

                    </Link>

                )}
            </div>



            <button onClick={prevPage}>prevPage</button>
            <button disabled={pageNumber > 499} onClick={nextPage}>nextPage</button>
        </div>
    )
};

export default MoviesListCard;