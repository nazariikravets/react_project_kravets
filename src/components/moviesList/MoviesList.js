import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const {movies, page} = useSelector(state => state.movies);
    console.log(movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll({page:query.get('page')}))


    }, [dispatch,query]);



    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    }

    return (
        <div>
            <button disabled={page < 1} onClick={prevPage}>prevPage</button>
            <button disabled={page > 500} onClick={nextPage}>nextPage</button>

            {
                movies.map(value => <div>{JSON.stringify(value)}</div>)
            }
        </div>
    );
};

export default MoviesList;