const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.getTrips);

router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
