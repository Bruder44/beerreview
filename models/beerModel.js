const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var beerScheme = new Schema({
    beerName: {
        type: String,
        trim: false
    },
    breweryName: {
        type: String,
        trim: false
    },
    beerStyle: {
        type: String,
        trim: false
    },
    pairingNotes: {
        type: Array,
        trim: false
    },
    imgFilePath: {
        type: String
    },
    adminRating: {
        type: Number
    },
    userRating: {
        type: Number
    },
    numberOfVotes: {
        type: Number
    }
})


const Scheme = mongoose.model('Scheme', beerScheme);

module.exports = Scheme;