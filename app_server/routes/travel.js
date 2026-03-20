var express = require('express');
var router = express.Router();
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json',
'utf8'));

/* GET travel page. */
router.get('/', function(req, res) {
  res.render('travel', {
    title: 'Travelr Getaways',
    trips: trips
  });
});

module.exports = router;