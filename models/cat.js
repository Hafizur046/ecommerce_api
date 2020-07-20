const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    // isActivated: {type: Boolean, require: true},
// let subcatSchema = new Schema({
//     catname: {type: String},
//     subcats: [{subcatSchema}]
// })
const catSchema = new Schema({
    // schemaIndex: {type: Number, require: true},
    onuse: {
        type: Boolean,
        required: false,
        default: false
    },
    cats: [{
        catname: {type: String},
        subcats: [{
            catname: {type: String},
            subcats: [{
                catname: {type: String},
                subcats: [{
                    catname: {type: String},
                    features: {
                        type: String,
                        require: false,
                    }
                }]
            }]
        }]
    }]
})

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;