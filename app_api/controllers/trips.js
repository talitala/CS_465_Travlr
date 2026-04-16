const Trip = require('../models/travlr');

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.desc || req.body.description
        });

        const q = await newTrip.save();
        return res.status(201).json(q);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const tripsUpdateTrip = async (req, res) => {
    try {
        // Uncomment for debugging
        // console.log(req.params);
        // console.log(req.body);

        const q = await Trip.findOneAndUpdate(
            { code: req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.desc || req.body.description
            },
            {
                new: true,
                runValidators: true
            }
        ).exec();

        if (!q) {
            return res.status(400).json({ message: 'Trip not found or not updated' });
        } else {
            return res.status(201).json(q);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getTrips,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};