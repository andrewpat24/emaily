const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientsSchema = new Schema ({
    email: String, 
    responded: {
        type: Boolean, 
        default: false
    }
});

module.exports = recipientsSchema; 