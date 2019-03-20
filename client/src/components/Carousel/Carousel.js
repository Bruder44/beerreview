import React from "react";
import { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

class Carousel extends Component {
    state = {
        beers: [],
    };
    componentDidMount() {
        this.loadBeers();
    }
    loadBeers = () => {
        console.log(`I'm on Smoko`);
        API.getSome()
            .then(res => {
                console.log('so leave me alone');
                console.log(res.data);
                this.setState({
                    beers: res.data,
                });
                console.log(this.state.beers);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div id="carouselExampleControls" className="carouselSlide" data-ride="carousel">
                <div className="carousel-inner">
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <div className="carousel-item active">
                        <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968" className="d-block w-100" alt="..." />
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Beer1</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Brewer1</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div>
                    {this.state.beers.map(beer =>                    
                        <div className="carousel-item" key={beer._id}>
                            <img src={beer.image} className="d-block w-100" alt="..." />
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{beer.beer}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{beer.brewer}</h6>
                                    <p className="card-text">{beer.style}</p>
                                    <p className="card-text">{beer.description}</p>
                                    <Link to={`/beer/${beer._id}`}>
                                        {/* <a href="#" className="card-link">Card link</a> */}
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <div className="carousel-item">
                        <img src="https://i.ebayimg.com/images/g/k7EAAOSw9M5a5AyX/s-l300.jpg" className="d-block w-100" alt="..." />
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Beer Name</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Brewery</h6>
                                <p className="card-text">Blah blah blah blah Blah blah blah blah Blah blah blah blah Blah blah blah blah.</p>
                                <a href="#" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div> */}
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            // )
        )
    }
}

export default Carousel;