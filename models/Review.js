const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    bread: {
        type: Schema.Types.ObjectId,
        ref: 'breads'
    },
     bread_name: {
        type: Schema.Types.name,
        ref: 'breads'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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