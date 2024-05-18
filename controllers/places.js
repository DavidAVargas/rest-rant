const express = require('express');
const router = express.Router();

// Import the places model part 5, part 6, step 4
const places = require('../models/places.js');

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places });
});

// new from part 5
router.get('/new', (req, res) => {
    res.render('places/new');
});

// part 6
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})


router.post('/', (req, res) => {
    console.log(req.body);
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      places.push(req.body)
    res.redirect('/places');
});

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router;
