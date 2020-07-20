const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: false
    },
    permission: {
        type: String,
        required: false
    },
    joinedAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        required: false
    },
    orders: [
        {
            orderedProduct: {
                type: mongoose.ObjectId,
                ref: 'Order',
            },
            dateOrdered: {
                type: Date,
                default: new Date(),
                required: false
            }
        }
    ],
    address: {
        type: Object,
        required: false,
        lat: {
            type: Number,
            require: true
        },
        long: {
            type: Number,
            require: true
        }
    },
    profilePicture: {
        type: String,
        required: false
    },
    sellerID: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Shop'
    }
})

let User = mongoose.model('User' , userSchema);
module.exports = User;