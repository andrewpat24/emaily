// Dependency Imports
const express = require('express');
const router = express.Router();

// Middleware Imports
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');

// Routes
router.post('/', requireLogin, requireCredits, (req, res) => {

});

// Export
module.exports = router; 
