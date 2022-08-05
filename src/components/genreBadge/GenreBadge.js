import React from 'react';
import {Badge} from "react-bootstrap/dist/react-bootstrap.min";



const GenreBadge = ({genre}) => {



    return (
        <div>
            <h1>
                Example heading <Badge bg="secondary">{genre}</Badge>
            </h1>
            
        </div>
    );
};

export default GenreBadge;