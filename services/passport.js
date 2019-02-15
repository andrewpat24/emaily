const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use( new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_ID, 
    clientSecret: process.env.GOOGLE_OAUTH_SECRET, 
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log("access token:", accessToken);
    console.log("refresh Token:", refreshToken); 
    console.log("profile:", profile);
}) );