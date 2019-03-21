const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users'); 

passport.serializeUser( (user, done) => {
    done(null, user.id); 
});

passport.deserializeUser( (userID, done) => {
    console.log("userID:", userID);
    User.findById(userID).then( (user) => {
        done(null, user);
    } );
});

passport.use( new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_ID, 
    clientSecret: process.env.GOOGLE_OAUTH_SECRET, 
    callbackURL: '/api/auth/google/callback', 
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    proxy: true,
    resave: false
}, async (accessToken, refreshToken, profile, done) => {

    console.log('User successfully fetched from google OAuth!');
    if(mongoose.connection.readyState == 0) console.log('DB not connected');
    const existingUser = await User.findOne( { googleId: profile.id } );

    if(!!existingUser) {

        console.log('User already exists in collection.');
        done(null, existingUser); 

    } else {

        const newUser = await new User({
            googleId: profile.id
        }).save();

        done(null, newUser);
    }
}) );