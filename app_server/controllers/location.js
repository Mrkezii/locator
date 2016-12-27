//Get Home page
module.exports.homelist = function (req, res, next) {
    res.render('location-list', {
        title: 'Home'
    });
}

//Get Locations Info Page
module.exports.locationInfo = function (req, res, next) {
    res.render('index', {
        title: 'Location'
    });
}

//Get Review Page
module.exports.addReview = function (req, res, next) {
    res.render('index', {
        title: 'Review'
    });
}
