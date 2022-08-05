import React from 'react';

import {urls} from "../../constants";
import './PosterPreview.css'

const PosterPreview = ({poster,alt}) => {

    let src=`${urls.getPosters}${poster}`
    return (
        <div className={'poster'}>
            <img src={src} alt={alt}/>
            
        </div>
    );
};

export default PosterPreview;