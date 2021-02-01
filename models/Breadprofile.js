const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreadprofileSchema = new Schema({
    thin: {
        type: Boolean,
        default: false
    },
    wholewheat: {
        type: Boolean,
        default: false
    },
    filling: {
        type: Boolean,
        default: false
    },
    savory: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Breadprofile = mongoose.model('breadprofiles', BreadprofileSchema);
module.exports = Breadprofile;