require('dotenv').load();

// Express
const express = require('express');
const app = express(); 

// PORT
const PORT = process.env.PORT || 5000; 
app.listen( PORT );

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
require('./models/Users');

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

// Routes 
const authRouter = require('./routes/auth');
const rootRouter = require('./routes/root');
app.use('/auth', authRouter);
app.use('/', rootRouter);

