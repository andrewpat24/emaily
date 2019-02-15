require('dotenv').load();
const express = require('express');
require('./services/passport');

const app = express(); 
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');

app.use('/auth', authRouter);
app.use('/', indexRouter);

const PORT = process.env.PORT || 5000; 
app.listen( PORT );