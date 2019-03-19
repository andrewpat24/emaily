const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    process.env.STRIPE_SECRET
);

router.post("/stripe", async (req, res) => {

    if(!req.user) {
        return res.status(401).send({
            error: 'User must be logged in to add credits.'
        });
    } 

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