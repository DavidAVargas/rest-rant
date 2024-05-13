const express = require('express');
const router = express.Router();

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/rest.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/code-cat-cafe.jpg'
    }];

    res.render('places/index', { places });
});

// new from part 5
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

module.exports = router;
