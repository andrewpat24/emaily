require('dotenv').load();

// Express
const express = require('express');
const app = express(); 

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
require('./models/Users');

// Routes 
const authRouter = require('./routes/auth');
const rootRouter = require('./routes/root');
app.use('/auth', authRouter);
app.use('/', rootRouter);

// Passport
require('./services/passport');

// PORT
const PORT = process.env.PORT || 5000; 
app.listen( PORT );