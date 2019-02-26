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
        res.send({
            success:'true'
        });
    } 
);

router.get('/current_user', 
    (req, res) => {
        console.log(req.user, req.session);
        const returnObject = {
            "logged in": !!req.user, 
            userObj: req.user
        }
        res.send(returnObject);
    }
);

router.get('/logout', 
    (req, res) => {
        req.logout();
        const returnObject = {
            "logged in": !!req.user,
            userObj: req.user
        }
        res.send(returnObject);
    }
);

module.exports = router; 