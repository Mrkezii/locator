var express = require('express');
var router = express.Router();
var cntrlLocation = require('../controllers/location');
var cntrlOthers = require('../controllers/others');

//get homepage
router.get('/', cntrlLocation.homelist); // homepage
router.get('/location-info', cntrlLocation.locationInfo); //info on each clicked place
router.get('/location/review/new', cntrlLocation.addReview); // add review

//Others page
router.get('/about', cntrlOthers.about);

module.exports = router;