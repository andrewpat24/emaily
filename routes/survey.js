// Imports
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

// Services
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// Middleware
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');

// Routes
router.post('/', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body; 
    console.log(recipients);
    const survey = new Survey ({
        title, 
        subject, 
        body, 
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id, 
        dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
        await mailer.send(); 
    } catch (e) {
        console.log("Error sending email:", e);
        res.status(422).send(e); 
    } 

    try {
        await survey.save(); 
    } catch (e) {
        console.log("Error saving survey to db:", e);
        res.status(422).send(e); 
    }

    req.user.credits -= 1; 
    // req.user is now out of date. Use userModel instead of req.user anywhere needed under this request. 
    const userModel = await req.user.save(); 
    res.send(userModel);

});


// Export
module.exports = router; 
