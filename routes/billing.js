const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    process.env.STRIPE_SECRET
);

router.post("/stripe", async (req, res) => {

    const charge = await stripe.charges.create({
        amount: 500, 
        currency: 'usd', 
        description: 'Adds $5 of credit to user',
        source: req.body.id
    });

    console.log(charge);

});


module.exports = router; 