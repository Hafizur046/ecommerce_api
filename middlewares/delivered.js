function delivered(User, Order, Product){
    return async (req, res, next)=>{
        try {
            let order = await Order.findById(req.query.OrderId);
            if(order.orderedFrom === req.user._id){
                if(order.isDelivered === false){
                    let delivered = await Order.update({_id: req.query.OrderId}, {isDelivered: true});
                }else{
                    res.send('Order was already confirmed');
                }
            }else{
                res.send('You are not the orderer of this orderId');
            }
        } catch (error) {
            console.log(error);
        }
        // let product = await Product.findById(order.)
    }
}

module.exports = delivered;