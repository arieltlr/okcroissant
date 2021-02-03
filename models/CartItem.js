const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    bread: {
        type: String,
        required: true

    },
    user: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CartItem = mongoose.model('cartitems', CartItemSchema);
module.exports = CartItem;