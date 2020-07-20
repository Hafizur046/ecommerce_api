const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let imageSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});
let reviewSchema = new mongoose.Schema({
    reviewerId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    rating: {
        type: Number,
        require: true
    },
    review: {
        type: String,
        require: true
    }
})

let productSchema = new mongoose.Schema({
    uploader: {
        type: Number,
        required: true,
        ref: 'User'
    },
    productName: {
        type: String,
        required: true
    },
    productDiscription: {
        type: String,
        required: true
    },
    productImages: [{imageSchema}],
    productPrice: {
        type: Number,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    outOfStock: {
        type: Boolean,
        default: false,
        required: false
    },
    discounts: [
        {
            percentage: {
                type: Number,
                min: 0,
                max: 100
            },
            isRemoved: {
                type: Boolean,
                default: false
            },
            code: {
                type: String,
                required: false
            }
        }
    ],
    globalDiscount: {
        discount: Number,
        required: false,
        timeCreated: {type: Date, default: Date()},
        timeRemaining: {type: Date, default: Date()}
    },
    sale: {
        discount: Number,
        sellId: mongoose.ObjectId
    },
    paymentMethods: {
        type: Array,
        required: true
    },
    options: {
        unit: String,
        selections: [{name: String, price: Number, image: String} ],
        require: false
    },
    dateUploaded: {
        type: Date,
        required: false,
        default: new Date()
    },
    reviews: [{reviewSchema}],
    avgReviews: {
        type: Number,
        required: false
    },
    searchRank: {
        type: Number,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    isBanned: {
        type: Boolean,
        default: false,
        require: false
    }
})

let Product = mongoose.model('Product' , productSchema);
module.exports = Product;