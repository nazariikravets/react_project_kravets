import React,{Component} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

class StarsRating extends Component{


    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        return (
            <StarRatings
                rating={this.props.rating/2}
                starRatedColor="yellow"

                numberOfStars={5}
                name='rating'
                starDimension="40px"
                starSpacing="15px"
            />
        );
    }
}
export default StarsRating