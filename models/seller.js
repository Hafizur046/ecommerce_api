const mongoose = require('mongoose');
// let productsSchema = new mongoose.Schema({
//     productID = 
// })
let Schema = mongoose.Schema;
let sellerSchema = new mongoose.Schema({
    sellerConfirmed: {
        type: Boolean,
        require: false,
        default: false
    },
    storeName: {
        type: String,
        require: false
    },
    sellerType: {
        type: String,
        enum: ['Individual', 'Business'],
        require: false
    },
    products: [
        {
            productID: {
                type: Schema.Types.ObjectId,
                require: true,
                ref: 'Product'
            },
            dateUploaded: {
                type: Date,
                default: Date()
            }
        }
    ]

})

let Seller = mongoose.model('Seller' , sellerSchema);
module.exports = Seller;