require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');



const app = express(); 
require('./services/passport');

// Mongoose
mongoose.connect(process.env.MONGO_URI);

// Routes 
const authRouter = require('./routes/auth');
const rootRouter = require('./routes/root');
app.use('/auth', authRouter);
app.use('/', rootRouter);

const PORT = process.env.PORT || 5000; 
app.listen( PORT );