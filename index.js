const express = require('express');
const passport = require('passport');
require('dotenv').load();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express(); 

app.get('/', (req, res) => {
    res.send({
        hello: "world"
    })
})

passport.use( new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_ID, 
    clientSecret: process.env.GOOGLE_OAUTH_SECRET, 
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log("access token:", accessToken);
    console.log("refresh Token:", refreshToken); 
    console.log("profile:", profile);
}) );

app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google') )

const PORT = process.env.PORT || 5000; 
app.listen( PORT );