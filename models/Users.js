const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {
        type: String, 
        unique: true
    }, 
    credits: {
        type: Number, 
        default: 0, 
        min: 0
    }
});

mongoose.model('users', userSchema);