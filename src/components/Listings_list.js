import React, { Component } from 'react';
import MovieLink from './Movie_link';

class ListingList extends Component {


    render() {

        const movieNodes = this.props.data.map((movie, index) => {
            return (
                <MovieLink
                    title={movie.title}
                    link={movie.link}
                    key={index}
                />
            )
        })
        console.log(movieNodes)

        return (
            <div>
                <h4>Uk Opening this week:</h4>
                {movieNodes}
                <h6>See more opening this week >></h6>
            </div>
        )
    }
}

export default ListingList;