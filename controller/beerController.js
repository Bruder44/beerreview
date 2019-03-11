const db = require('../models');

module.exports = {

// find all beers controller when route hit
    findAll: (req, res) => {
        console.log("Loading them all");
        db.Beer
            .find({})
            .sort({ style: -1 })
            .then(console.log("does this work?")).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // find a handful of beers for carousel
    findSome: (req, res) => {
        console.log("Loading some beers for carousel");
        db.Beer
            .find({})
            .limit(6)
            .sort({ _id: -1 })
            .then(dbModel => res.json(dbModel))
            // .then(console.log(res.body))
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
        console.log(`updating ${req.body.username} with new notes`);
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
                { $inc: {numberOfVotes: 1},
                    $push: {userRating: (( (userRating * (numberOfVotes -1 )) + req.body.rating) / numberOfVotes)} 
                }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    
//  POST for register
    signUp: (req, res, next) => {
        console.log('request body:');
        if (req.body.email &&
            req.body.username &&
            req.body.password &&
            req.body.confirmPassword) {
        
              // confirm that user typed same password twice
              if (req.body.password !== req.body.confirmPassword) {
                var err = new Error('Passwords do not match.');
                err.status = 400;
                return next(err);
              }
        
              // create object with form input
              var userData = {
                email: req.body.email,
                username: req.body.name,
                password: req.body.password
              };
        
              // use schema's `create` method to insert document into Mongo
            //   db.User.create(userData, function (error, user) {
                // if (error) {
                //   return next(error);
                // } else {
                //   req.session.userId = user._id;
                //   return res.redirect('/');
                // }
            //   })
            db.User.create(userData)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
              
            } else {
              var err = new Error('All fields required.');
              err.status = 400;
              return next(err);
            }
    },

//  POST for login
    logIn: (req, res) => {
        console.log("logging in...");
        if (req.body.email && req.body.password) {
            db.User.authenticate(req.body.email, req.body.password, function(error, user){
              if (error || !user) {
                var err = new Error('You fucked up.');
                err.status = 401;
                return next(err);
              } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
              }
            });
          } else {
            var err = new Error('Fillout the form you fucking dummy');
            err.status = 401;
            return next(err);
          }
    },


}