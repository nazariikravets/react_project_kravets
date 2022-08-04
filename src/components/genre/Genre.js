import React from 'react';
import {Link} from "react-router-dom";

const Genre = ({item}) => {
    const{id,name}=item
    return (
        <div>
            <Link to={`${id}`}>

                <div>{name}</div>
            </Link>

        </div>
    );
};

export default Genre;