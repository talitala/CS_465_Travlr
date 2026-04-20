const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const mongoose = require('mongoose');
const Users = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
},
async (username, password, done) => {
    const q = await User.findOne({email: username}).exec();
    if (!q) {
        return done(null, false, {message: 'Incorrect email.'});
    }
    if (!q.validPassword(password)) {
        return done(null, false, {message: 'Incorrect password.'});
    }
    return done(null, q);
}));
