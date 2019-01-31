import React from "react";
import { Component } from 'react';

let x = "width: 18rem;";

class Carousel extends Component {
    state = {}
    render() {
        return (
            <div id="carouselExampleControls" className="carouselSlide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968" className="d-block w-100" alt="..." />
                        <div className="card" style={{x}}>
                            <div className="card-body">
                                <h5 className="card-title">Beer Name</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Brewery</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.kym-cdn.com/entries/icons/original/000/019/068/lgJCmtjW_400x400.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ebayimg.com/images/g/k7EAAOSw9M5a5AyX/s-l300.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;