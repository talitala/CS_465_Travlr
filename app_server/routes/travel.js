const express = require('express');
const router = express.Router();

const travel = async function (req, res, next) {
  const port = process.env.PORT || 3000;
  const tripsEndpoint = `http://localhost:${port}/api/trips`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  let message = null;
  let trips = [];

  try {
    const response = await fetch(tripsEndpoint, options);

    if (!response.ok) {
      if (response.status === 404) {
        message = 'No trips found in the database.';
      } else {
        message = `API error: ${response.status} ${response.statusText}`;
      }
    } else {
      const json = await response.json();
      if (!Array.isArray(json) || json.length === 0) {
        message = 'No trips found in the database.';
      } else {
        trips = json;
      }
    }
  } catch (err) {
    if (/lookup/i.test(err.message) || /getaddrinfo/i.test(err.message)) {
      message = 'API lookup error: cannot reach the trips service.';
    } else {
      message = `API error: ${err.message}`;
    }
  }

  res.render('travel', {
    title: 'Travlr Getaways',
    trips,
    message
  });
};

router.get('/', travel);

module.exports = router;
