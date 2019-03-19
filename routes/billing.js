const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    process.env.STRIPE_SECRET
);
const requireLogin = require('../middleware/requireLogin');

router.post("/stripe", requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({
        amount: 500, 
        currency: 'usd', 
        description: 'Adds $5 of credit to user',
        source: req.body.id
    });
    console.log(charge);

    req.user.credits += 5; 
    const user = await req.user.save(); 
    res.send(user);

});


module.exports = router; 