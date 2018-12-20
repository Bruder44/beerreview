const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require('dotenv').load();

// port variable (local or production)
const PORT = process.env.PORT || 3001;

// initialize express object
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Promise = mongoose.Promise;




// connect to database (local or production)
// mongoose.connect(MONGODO_URI, err => {
//     if (err) console.error(err);
//     else console.log(`Database Connected!`);
// })
// routes or import from route module

// connect to server (local or production)
app.listen(PORT, err => {
    if (err) console.error(err);
    else console.log(`Server listening on port ${PORT}`);
});