import React, { Component } from 'react';
import ListingList from '../components/Listings_list';

class ListingsMaster extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[
                { title: "Sausage Party", link: "link1" },
                { title: "Cafe Society", link: "link2" },
                { title: "Morgan", link: "link3" },
                { title: "Nami Hai Akira", link: "link4" },
                { title: "Equity", link: "link5" },
                { title: "Things to come", link: "link6" }
            ]
        }
    }



    render() {
        return (
            <div>
            <ListingList data= {this.state.data}/>
            <button>Get showtimes >></button>
            </div>
        )
    }

}

export default ListingsMaster;