const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');

const login = (req, res) => {
// Validate message to ensure that email and password are present.
if (!req.body.email || !req.body.password) {
return res
.status(400)
.json({"message": "All fields required"});
}
// Delegate authentication to passport module
passport.authenticate('local', (err, user, info) => {
if (err) {
// Error in Authentication Process
return res
.status(404)
.json(err);
}
if (user) { // Auth succeeded - generate JWT and return to caller
const token = user.generateJWT();
res
.status(200)
.json({token});
} else { // Auth failed return error
res
.status(401)
.json(info);
}
})(req, res);
};

const register = (req, res) => {
// Validate message to ensure that email, password, and name are present.
if (!req.body.email || !req.body.password || !req.body.name) {
return res
.status(400)
.json({"message": "All fields required"});
}

// Create a new user
const user = new User({
email: req.body.email,
name: req.body.name
});

// Set password using the setPassword method from passport
user.setPassword(req.body.password);

// Save the user to the database using promises
user.save()
.then(() => {
// Registration succeeded - generate JWT and return to caller
const token = user.generateJWT();
res
.status(200)
.json({token});
})
.catch((err) => {
res
.status(400)
.json(err);
});
};

module.exports = {
register,
login
};
