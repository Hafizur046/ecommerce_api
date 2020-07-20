const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
        sellerConfirmed: {
            type: Boolean,
            require: false,
            default: false
        },
        createdAt: {
            type: Date,
            required: false,
            default: new Date()
        },
        shopName: {
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
        ],
        recievedOrders: [
            {
                OrderID: {
                    type: mongoose.ObjectId,
                    ref: 'Order'
                },
                timeRecieved: {
                    type: Date,
                    default: new Date(),
                    require: false
                }
            }
        ],
        isBanned: {
            type: Boolean,
            default: false,
            require: false
        }
    
    })

    const Shop = mongoose.model('Shop', shopSchema);
    module.exports = Shop;