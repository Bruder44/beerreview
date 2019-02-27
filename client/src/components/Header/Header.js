import React from "react";
import { Component } from 'react';

class Header extends Component {
    state = {
        beers: [],
        keyword: "",
        username: "",
        searchType: ""
    };

    handleKeywords = (event) => {
        const { keyword, value } = event.target;
        this.setState({ keyword: value.toLowerCase() })
    };


    render() {
        return (
            <div id="header">
                <h1 className="Head">Beer Review</h1>

                <div className="nav">
                    <button type="button" className="search btn btn-primary">Search</button>
                    <input type="text" className="search-control" onChange={this.handleType} />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Search By
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button" href="#">Beer</button>
                            <button className="dropdown-item" type="button" href="#">Brewery</button>
                            <button className="dropdown-item" type="button" href="#">Style</button>
                            <button className="dropdown-item" type="button" href="#">Pairings</button>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}



export default Header;