require('dotenv').load();
const express = require('express');
require('./services/passport');

const app = express(); 
const authRouter = require('./routes/auth');

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send({
        hello: "world"
    })
});

const PORT = process.env.PORT || 5000; 
app.listen( PORT );