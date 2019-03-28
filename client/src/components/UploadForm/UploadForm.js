import React, { Component } from 'react';
import API from '../../utils/API';

class UploadForm extends Component {
    state = {
        beer: "",
        brewer: "",
        style: "",
        description: "",
        pairingNotes: [],
        imgFilePath: "",
        score: "",
        userRating: "",
        numberOfVotes: "",
        availableIn: [],
        abv: "",
        uploadedBy: "",

    }

    handleInputChange = event => {
        const { pairingNotes, value } = event.target;
        this.setState({
            pairingNotes: value.replace(/\s*,\s*/g, ",").toLowerCase().split(',')
        });
    };

    handleUpload = event => {
        event.preventDefault();
        var files = document.getElementById('photoupload').files;
        if (!files.length) {
            return alert('Please choose a file to upload first.');
        };
        var file = files[0];
        var path = file.name;
        console.log("Uploading...");
        this.setState({
            filePath: 'https://s3.amazonaws.com/beerreview100/images/beerreviewimages/' + path
        })
        Storage.put(path, file).then(() => {
            this.setState({ filePath: path })
        });
    }

    mongoUpload = (event) => {
        if (this.state.filePath === "") {
            alert("Select a beer image to upload");
            return;
        } else if (this.state.pairingNotes.length === 0) {
            alert("You must add pairing notes for your beer");
        }
        else if (this.state.beer.length === 0) {
            alert("You must add the beer name to the upload form");
        }
        else if (this.state.brewer.length === 0) {
            alert("You must add the brewing company to the upload form");
        }
        else if (this.state.style.length === 0) {
            alert("You must add a style for the beer upload form");
        }
        else if (this.state.description.length === 0) {
            alert("You must add a description for the beer upload form");
        }
        else if (this.state.userRating.length === 0) {
            alert("You must assign a user rating for the beer upload form");
        }
        else if (this.state.abv.length === 0) {
            alert("Input beers abv, if unknown please put ? in the beer upload form");
        }

        event.preventDefault();
        this.setState({
            filePath: 'https://s3.amazonaws.com/beerreview100/images/beerreviewimages/' + this.state.filePath
        })
        console.log(this.state)

        API.uploadBeer({
            imgFilePath: 'https://s3.amazonaws.com/beerreview100/images/beerreviewimages/' + this.state.filePath,
            uploadedBy: this.state.uploadedBy,
            pairingNotes: this.state.pairingNotes,
            beer: this.state.beer,
            brewer: this.state.brewer,
            description: this.state.description,
            style: this.state.style,
            score: this.state.score,
            userRating: this.state.userRating,
            numberOfVotes: this.state.numberOfVotes,
            availableIn: this.state.availableIn,
            abv: this.state.abv,
        })
            .then(res => window.location = "/")
            .catch(err => console.log(err));
        return;
    }

    render() {
        return (
            <div className="uploadForm">
                {/* <Authenticator federated={federated} includeGreetings={true}> */}
                {/* <S3Album picker /> */}
                <div className= "BeerUpload">Select Beer Photo to Upload Below:</div>
                <br />
                <input id="photoupload" type="file" accept="image/*" onChange={this.handleUpload.bind(this)} />
                <br />
                {this.state.filePath ? (this.state && <img className="image-upload" src={'https://s3.amazonaws.com/beerreview100/images/beerreviewimages/' + this.state.filePath} alt="" />) : (<div className={"hidden"} />)}
                <form id="tag-form" >
                    <div className="form-group row">
                        {/* <label htmlFor="colFormLabelSm" className="galada-fnt col-sm-2 col-form-label col-form-label-sm">Add a Category:</label> */}
                        <div className="">
                        <br />
                        <div className="BeerName">Beer Name:</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Beer Name Here" onChange={this.handleInputChange} />
                        <br />
                        <div className="Brewer">Brewery:</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Brewery Name Here" onChange={this.handleInputChange} />
                        <br />
                        <div className="Style">Style:</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Beer Style Here" onChange={this.handleInputChange} />
                        <br />
                        <div className ="Description">Beer Description:</div>                            <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Beer Description Here" onChange={this.handleInputChange} />
                        <br />
                        <div className="UserRating">Insert User Rating (1.0-5.0):</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Your Rating of this Beer (1.0-5.0) Here" onChange={this.handleInputChange} />
                        <br />
                        <div className="ABV">Beer ABV:</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Beer ABV Here" onChange={this.handleInputChange} />
                        <br />
                        <div className="pairingNotes">Beer Pairing Notes:</div>
                        <div className="pairingNotes">Seperate Different Beer Pairing Notes With Commas...</div>
                        <br />
                        <input type="string" className="form-control form-control-sm tags-text" id="colFormLabelSm" placeholder="Insert Pairing Notes Here" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div>
                        <button className='btn' id="addphoto" onClick={this.mongoUpload}> Add Beer </button>
                        <br />
                        <br />
                        <div className="upload-terms">By uploading to BeerReview you agree to the <a href="/terms">Terms and Conditions</a></div>
                    </div>
                </form>
                {/* </ Authenticator> */}
            </div>
        )
    }
};

export default UploadForm;