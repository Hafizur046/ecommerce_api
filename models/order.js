const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    orderedFrom: {
        type: Number,
        ref: 'User',
        required: true,
    },
    orderedTo: {
        type: Number,
        ref: 'User',
        required: true,
    },
    productOrdered: {
        type: mongoose.ObjectId,
        ref: 'Product',
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false,
        required: false
    },
    canceled: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        default: false,
        required: false
    },
    quantity: {
        type: Number,
        required: true
    },
    selected: {
        type: String,
        required: false
    },
    ammount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    isReviewedByBuyer: {
        type: Boolean,
        default: false,
        required: false
    },
    date: {
        type: Date,
        default: Date(),
        required: false
    }
})

let Order = mongoose.model('Order', orderSchema);
module.exports = Order;