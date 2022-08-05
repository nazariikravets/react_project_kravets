import React from 'react';

import {urls} from "../../constants";

const PosterPreview = ({poster,alt}) => {

    let src=`${urls.getPosters}${poster}`
    return (
        <div>
            <img src={src} alt={alt}/>
            
        </div>
    );
};

export default PosterPreview;