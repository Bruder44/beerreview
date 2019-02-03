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
                    <h4>Search</h4>
                    <input type="text" className="search-control" onChange={this.handleType} />
                </div>
            </div>
        );
    }
}



export default Header;