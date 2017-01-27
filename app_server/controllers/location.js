//Get Home page
module.exports.homelist = function (req, res, next) {
    res.render('location-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r ',
            strapline: 'Find places to work with wifi near you!'

        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Beach'],
            distance: '10m'
        },{
            name: 'Cafe Hero',
            address: '125 low Street, writing, ota',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: 'Burger Queen',
            address: 'Covenant University, Canaanland',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
}

//Get Locations Info(information of a particular place) Page
module.exports.locationInfo = function (req, res, next) {
    res.render('location-info', {
        title: 'Location Info'
    });
}

//Get Review Page
module.exports.addReview = function (req, res, next) {
    res.render('location-review-form', {
        title: 'Review'
    });
}
