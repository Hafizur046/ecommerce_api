const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let packetSchema = new Schema({
    orders: [{type: mongoose.ObjectId}],
    takenBy: {
        type: Number,
        ref: 'Delevery'
    }
})

let Packet = mongoose.model('Packet', packetSchema);
module.exports = Packet;