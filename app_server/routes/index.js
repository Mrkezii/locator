var express = require('express');
var router = express.Router();
var cntrlMain = require('../controllers/main');


//Get Homepage
router.get('/', cntrlMain.index);

module.exports = router;
