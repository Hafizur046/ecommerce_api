function sellerConfirm(Order, Product, User){
    return async (req, res, next)=>{
        try {
            let order = await Order.findById(req.query.OrderId);
            let product = await Product.findById(order.orderedTo);
            if(product.uploader === req.user._id){
                if(order.isConfirmed === false){
                    let confirmed = await Order.update({_id: req.query.OrderId}, {isConfirmed: true});
                    next();
                }else{
                    res.send('Order is already confirmed')
                }
            }else{
                res.send('You are not the owner of this product')
            }
        } catch (error) {
            console.log(error);
            res.send('Ops something went wrong')
        }
    }
}

module.exports = sellerConfirm;