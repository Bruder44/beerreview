const router = require('express').Router();
const beerRoutes = require('./beerRoutes');

router.use('/beerRoutes', beerRoutes);

module.exports = router;