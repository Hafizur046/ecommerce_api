function getProduct(Product){
    return async (req, res, next)=>{
        try {
            if(req.query.id){
                let product = await Product.findById(req.query.id);
                if(product.isBanned === false){
                    res.product = product;
                }else{
                    res.product = 'This product is banned'
                }
            }else{
                res.send('Id is required')
            }
        } catch (error) {
            console.log(error);
            res.send('Something went wrong')
        }
    }
}

module.exports = getProduct;