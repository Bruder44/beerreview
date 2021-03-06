const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const beerRoutes = require('./routes');
require('dotenv').load();

// port variable (local or production)
const PORT = process.env.PORT || 3001;

// const mongodb = process.env.MONGODB_URI;

// initialize express object
const app = express();

// passing in routes to express from routes module
app.use(beerRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
Promise = mongoose.Promise;




// connect to database (local or production)
mongoose.connect("mongodb://beerreviewers:beer1234@ds239648.mlab.com:39648/beerreview", {useNewUrlParser: true}, err => {
    if (err) console.error(err);
    else console.log(`Database Connected!!!`);
});
// routes or import from route module

// connect to server (local or production)
app.listen(PORT, err => {
    if (err) console.error(err);
    else console.log(`Server listening on port ${PORT}`);
});