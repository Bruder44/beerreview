const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var beerScheme = new Schema({
    beer: {
        type: String,
        trim: false,
        required: true
    },
    brewer: {
        type: String,
        trim: false,
        required: true
    },
    style: {
        type: String,
        trim: false,
        required: true
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
    },
    abv: {
        type: Number
    }
})


const beers = mongoose.model('beers', beerScheme);

module.exports = beers;