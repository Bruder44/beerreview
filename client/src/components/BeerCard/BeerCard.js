import React from "react";
import { Component } from 'react';
import API from '../../utils/API';

class BeerCard extends Component {
    state = {
        beer: {}
    }
}

componentDidMount() {
    this.loadBeer();
}

loadBeer = () => {
    consoloe.log("Loading data for teh beer");
    API.getOne()
}