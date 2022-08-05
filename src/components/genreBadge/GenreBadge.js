import React from 'react';
import Badge from 'react-bootstrap/Badge'



const GenreBadge = ({genre}) => {



    return (
        <div>
            <h6>
                 <Badge bg="secondary">{genre}</Badge>
            </h6>
            
        </div>
    );
};

export default GenreBadge;