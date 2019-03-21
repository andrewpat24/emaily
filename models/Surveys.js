const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipientsSchema = require('./Recipients');

const surveysSchema = new Schema({
    title: String, 
    body: String, 
    subject: String, 
    recipients: [RecipientsSchema], 
    yes: {
        type: Number, 
        default: 0, 
        min: 0
    }, 
    no: {
        type: Number, 
        default: 0, 
        min: 0
    }, 
    _user: {
        type: Schema.Types.ObjectId, 
        ref: 'Users'
    }, 
    dateSent: Date, 
    lastResponded: Date
});

mongoose.model('surveys', surveysSchema);
