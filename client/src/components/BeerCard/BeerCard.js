import React from "react";
import { Component } from 'react';
import API from '../../utils/API';

class BeerCard extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        beer: {}
    }

    componentDidMount() {
        console.log(this.props.params._id);
        this.loadBeer(this.props.params._id);
    }

    loadBeer = (_id) => {
        console.log("Loading data for teh beer");
        // _id = '5c8594bd5ddd769ce5781a10';
        console.log(_id);
        API.getOne(_id)
            .then(res => {
                console.log(res.data[0]);
                this.setState({ beer: res.data[0] })
            })
            .then(console.log(this.state.beer))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id='tehBeer'>
                <div className="beerCard">
                    <img src={this.state.beer.image} className="beerCard-img-top" alt="..." />
                    <div className="card-body">
                        <h4>Brewery:{this.state.beer.brewer}</h4>
                        <h5 className="card-title">Beer Name:{this.state.beer.beer}</h5>
                        <p className="card-text">Beer Description:{this.state.beer.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Beer Score:{this.state.beer.score}</li>
                        <li className="list-group-item">Beer ABV:{this.state.beer.abv}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BeerCard;
