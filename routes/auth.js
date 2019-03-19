const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/google/callback', 
    passport.authenticate('google'), (req, res) => {
       res.redirect('/surveys');
    } 
);

router.get('/current_user', 
    (req, res) => {
        console.log(req.user, req.session);
        res.send(req.user);
    }
);

router.get('/logout', 
    (req, res) => {
        req.logout();
        res.redirect('/');
    }
);

module.exports = router; 