//Get Home page
module.exports.homelist = function (req, res, next) {
    res.render('location-list', {
        title: 'Locator - find a place to work with wifi',
        pageHeader: {
            title: 'Locator ',
            strapline: 'Find places to work with wifi near you!'

        },
        sidebar:"Looking for wifi and a seat? Locator helps you find places to work when out and about. Perhaps with" +
        " coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Beach'],
            distance: '10m'
        },{
            name: 'Cafe Hero',
            address: '12 low Street, writing, lagos',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: 'Burger Queen',
            address: 'Covenant University, Canaanland',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        },{
            name: 'Cafetaria 2',
            address: 'beside senate building and opposite guest house',
            rating: 0,
            facilities: ['burnt food'],
            distance: '1m'
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
