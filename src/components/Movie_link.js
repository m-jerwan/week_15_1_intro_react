import React, {Component} from 'react';

class MovieLink extends Component{


render(){
    return(
        <div className="movie_container">
            <h3>{this.props.title} </h3> <p>{this.props.link}</p>
        </div>
    )
}


}

export default MovieLink;