import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {genreActions} from "../../redux";
import Genre from "../genre/Genre";

const GenreList = () => {

    const {genre} = useSelector(state => state.genre);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getGenre())
    },[])


    return (
        <div>
            {genre.map(value=><Genre key={value.id} item={value}/>)}
            <Outlet/>
        </div>
    );
};

export default GenreList;