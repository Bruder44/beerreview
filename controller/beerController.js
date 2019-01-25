const db = require('../models');

module.exports = {

// find all beers controller when route hit
    findAll: (req, res) => {
        console.log("Loading them all");
        db.Beer
            .find({})
            .sort({ style: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

// retrieve beer by category when route hit
    findByStyle: (req, res) => {
        console.log(`Listing  all available ${req.body.style}s in your area.`);
        db.Beer
            .find({ style: req.body.style })
            .sort({ name: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

// retrieve beer by user input when route hit
    findPairing: (req, res) => {
        console.log(`Finding beers to pair with ${req.body.pairingNotes}...`);
        db.Beer
            .find({ pairingNotes: req.body.pairingNotes })
            .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

// finds data for a specific beer
    findBeerById: (req, res) => {
        console.log(`retrieving data for ${req.body.id}`);
        db.Beer
            .find({ _id: req.body.id})
            .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

// create new beer with pairing notes and info when route hit
    newBeer: (req, res) => {
        console.log("adding beer to database..");
        db.Beer
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

// update beer with new pairing notes when route hit
    addNotes: (req, res) => {
        console.log(`updating ${req.body.id} with new notes`);
        db.Beer
            .findOneAndUpdate({ _id: req.body.id },
                { $push: {pairingNotes: req.body.pairingNotes} }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

// update public score when route hit (contains logic for finding score out of 5)
    addVote: (req, res) => {
        console.log(`adding your ${req.body.rating} rating to the total score`);
        db.Beer
            .findOneAndUpdate({ _id: req.body.id },
                {}
            )
    }
    

}