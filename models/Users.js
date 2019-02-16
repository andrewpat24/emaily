const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {
        type: String, 
        unique: true
    }
});

mongoose.model('users', userSchema);