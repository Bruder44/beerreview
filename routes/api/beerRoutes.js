const router = require('express').Router();
const beerController = require('../../controller/beerController');

// Find All and Create New Beer
router.route('/')
    .get(beerController.findSome)
    .post(beerController.newBeer);

// Load SignUp page and capture form data
router.route('/register')
    // .get(beerController.signUp)
    .post(beerController.signUp);

// Load Login page
router.route('/login')
    .get(beerController.logIn)
    .post(beerController.logIn);

// Find a specific beer and add a note to that specific beer
router.route('/:beer')
    .get(beerController.findBeerById)
    .post(beerController.addNotes);

// Find By Category
router.route('/:style')
    .get(beerController.findByStyle);

// Find By User Input   
router.route('/:pairing')
    .get(beerController.findPairing);



module.exports = router;