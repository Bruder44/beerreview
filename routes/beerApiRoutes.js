const router = require('express').Router();
const BeerController = require('../controller/beerController');

// Find All and Create New Beer
router.route('/')
    .get(BeerController.findAll)
    .post(BeerController.newBeer);

// Find a specific beer and add a note to that specific beer
router.route('/:beer')
    .get(BeerController.findBeerById)
    .post(BeerController.addNotes);
    
// Find By Category
router.route('/:style')
    .get(BeerController.findByStyle);

// Find By User Input   
router.route('/:pairing')
    .get(BeerController.findPairing);

// Load Login page
router.get('/login')
    .get(BeerController.logIn)
    .post(BeerController.logIn);

// Load SignUp page and capture form data
router.get('/signup')
    .get(BeerController.signUp)
    .post(BeerController.signUp);

module.exports = router;