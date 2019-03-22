require('dotenv').load();

// Express
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

// PORT
const PORT = process.env.PORT || 5000; 
app.listen( PORT );

// Body Parser
app.use(bodyParser.json());

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
require('./models/Users');
require('./models/Surveys');

// Session 
const cookieSession = require('cookie-session');
app.use(
    cookieSession({
        maxAge: (30 * 24 * 60 * 60 * 1000), 
        keys: [process.env.COOKIE_KEY]
    })
);

// Passport
const passport = require('passport');
require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());

// TODO: Set default server route prefix 

// Routes 
const authRouter = require('./routes/auth');
const billingRouter = require('./routes/billing');
const surveyRouter = require('./routes/survey');

app.use('/api/auth', authRouter);
app.use('/api/billing', billingRouter);
app.use('/api/survey', surveyRouter);

// Prod Client Routes
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); 
    app.use('*', express.static('client/build')); 
}

