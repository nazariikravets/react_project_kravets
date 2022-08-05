import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {urls} from "../../constants";
import GenreBadge from "../genreBadge/GenreBadge";
import {genreActions} from "../../redux";

const MovieInfo = ({state}) => {

    const {
        genre_ids,
        original_language,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count
    } = state

    let src = `${urls.getPosters}${poster_path}`

    const {genre} = useSelector(state => state.genre);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [])


    const genreName = (genre, genreId) => {

        let nameGenre = [];
        for (let i = 0; i < genreId.length; i++) {
            for (let j = 0; j < genre.length; j++) {
                if (genre[j].id === genreId[i]){
                    nameGenre.push(genre[j].name)
                }

            }

        }
        return nameGenre
    }

    let genreArray = genreName(genre, genre_ids)
    console.log(genreArray)


    return (
        <div>
            <h1>{title}</h1>
            <div>
                <div>
                    <img src={src} alt={title}/>
                </div>
                <div>
                    <div>
                        <div>
                            <div>Ratings:</div>
                            <div>Release date:</div>
                            <div>Popularity:</div>
                            <div>Original language:</div>
                            <div>Genre:</div>

                        </div>
                        <div>
                            <div>
                                <h2>{vote_average} </h2>({vote_count})
                            </div>
                            <div>{release_date}</div>
                            <div>{popularity}</div>
                            <div>{original_language}</div>
                            {genreArray.map((value, index) => <GenreBadge key={index} genre={value}/>)}


                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>What is the movie about?</h3>
            </div>
            <div>{overview}</div>

        </div>
    );
};

export default MovieInfo;