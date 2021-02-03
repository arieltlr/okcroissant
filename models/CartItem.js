const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    bread: {
        type: Schema.Types.ObjectId,
        ref: 'breads'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CartItem = mongoose.model('cartitems', CartItemSchema);
module.exports = CartItem;