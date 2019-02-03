import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
//import 'font-awesome/css/font-awesome.min.css';

class FooterPage extends React.Component {
  render(){
    return(
      <Footer color="black" className="font-small pt-0">
          <Container fluid className="text-center text-md-left">
            <Row className="my-4">
              <Col md="4" lg="4">
                <h5 className="text-uppercase mb-4 font-weight-bold">BeerReview</h5>
                <p>BeerReview is a cutting edge web application for pairing the best experiences and items with the ideal beers, get yourself paired up with a good beer thanks to BeerReview!</p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">Beer Review</h5>
                <ul className="list-unstyled">
                  <p><a href="#!">Upload a New Beer</a></p>
                  <p><a href="#!">Add Pairing Notes</a></p>
                  <p><a href="#!">About Us at Beer Review</a></p>
                  <p><a href="#!">Beer Awards</a></p>
                  <p><a href= "#!">Blog</a></p>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="5" lg="3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                <p><i className="fa fa-home mr-3"></i> Your Mom's Favourite Bar Atlanta, GA 30021</p>
                <p><i className="fa fa-envelope mr-3"></i> beerreview1@gmail.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 01 404 625 8305</p>
                <p><i className="fa fa-print mr-3"></i> + 01 404 345 5220</p>
                <p><i className="fa fa-print mr-3"></i> + 01 404 449 7898</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="mb-5 flex-center">
                  <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text fa-2x"> </i></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {(new Date().getFullYear())} Copyright: <a href="https://beerreview.herokuapp.com/"> beerreview.com </a>
            </Container>
          </div>
      </Footer>
    );
  }
}

export default FooterPage;