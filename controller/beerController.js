const db = require('../models');

module.exports = {

// find all beers controller when route hit
    findAll: (req, res) => {
        console.log("Loading them all");
        db.Beer
            .find({})
            .sort({ style: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

// retrieve beer by category when route hit

// retrieve beer by user input when route hit

// create new beer with pairing notes and info when route hit

// update beer with new pairing notes when route hit

// update public score when route hit (contains logic for finding score out of 5)

}