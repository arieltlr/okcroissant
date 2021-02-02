const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    wholewheat: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    thin: {
        type: Boolean,
        default: false
    },
    savory: {
        type: Boolean,
        default: false
    },
    filling: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Bread = mongoose.model('breads', BreadSchema);
module.exports = Bread;