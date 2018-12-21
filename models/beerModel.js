const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var beerScheme = new Schema({
    beer: {
        type: String,
        trim: false
    },
    brewer: {
        type: String,
        trim: false
    },
    style: {
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
    score: {
        type: Number
    },
    userRating: {
        type: Number
    },
    numberOfVotes: {
        type: Number
    },
    availableIn: {
        type: Array
    }
})


const Scheme = mongoose.model('Scheme', beerScheme);

module.exports = Scheme;