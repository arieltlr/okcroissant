const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    bread: {
        type: Schema.Types.ObjectId,
        ref: 'breads'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('reviews', ReviewSchema);
module.exports = Review;
