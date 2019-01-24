const path = require('path');
const router = require('express').Router();
const beerRoutes = require('./beerApiRoutes');

// passing /api into routes and connecting to routes module
router.use('/api', beerRoutes);

// If no API routes are hit, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})


// get route to retrieve all beers from database

// get route to retrieve beers by category

// get route to retrieve beers by user input

// create new beers with pairing notes and info

// update beers with new pairing notes

// update public score 

module.exports = router;