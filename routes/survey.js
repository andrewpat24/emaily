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
router.post('/', requireLogin, requireCredits, (req, res) => {
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
    mailer.send(); 
});


// Export
module.exports = router; 
