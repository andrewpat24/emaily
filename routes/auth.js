const express = require('express');
const router = express.Router();
const passport = require('passport');



router.get('/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/google/callback', passport.authenticate('google'), function(req, res) {
    res.send({
        success:'true'
    });
} );

module.exports = router; 