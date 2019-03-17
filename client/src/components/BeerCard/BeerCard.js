import React from "react";
import { Component } from 'react';
import API from '../../utils/API';

class BeerCard extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
        beer: {}
    }

    componentDidMount() {
        console.log(this.props);
        this.loadBeer();
    }

    loadBeer = () => {
        console.log("Loading data for teh beer");
        API.getOne(this.props.match.params._id)
            .then(res => {
                this.setState({ beer: res.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id='tehBeer'>
                <h1>Hello, Beer!</h1>
            </div>
        )
    }
}

export default BeerCard;