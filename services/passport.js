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
    callbackURL: '/auth/google/callback', 
    proxy: true,
    resave: false
}, (accessToken, refreshToken, profile, done) => {
    console.log('User successfully fetched from google OAuth!');
    console.log('tesashi;dfodjizfbjdifgndjkfghdosihfdshfsdhfhiosdif');
    mongoose.connection.on('open', function (ref) {
        console.log('Connected to mongo server.');
      });
      mongoose.connection.on('error', function (err) {
        console.log('Could not connect to mongo server!');
        console.log(err);
      });

    User.findOne( { googleId: profile.id } )
        .then( (existingUser) => {
            console.log("line 29 - passport.js file");
            if(!!existingUser) {

                console.log('User already exists in collection.');
                done(null, existingUser); 

            } else {

                new User({
                    googleId: profile.id
                }).save().then( (newUser) => {
                    done(null, newUser);
                });

            }
        } ).catch( (e) => {
            console.log(e);
        } );

        
}) );