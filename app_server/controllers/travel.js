var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
  res.locals.currentPage = 'travel';
  res.render('travel', { title: 'Travelr Getaways', trips: trips });
}

module.exports = { travel };