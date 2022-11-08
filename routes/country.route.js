const {Router} = require('express');
const router = Router();
const { contrySouthAmerica, contrycentralAmerica } = require('../controller/country.controller');

// define the home page route
router.get('/southAmerica', contrySouthAmerica);
router.get('/centralAmerica', contrycentralAmerica );


module.exports = router;