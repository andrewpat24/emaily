const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users'); 

passport.use( new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_ID, 
    clientSecret: process.env.GOOGLE_OAUTH_SECRET, 
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('User successfully fetched from google OAuth!');
    new User({
        googleId: profile.id
    }).save();
}) );