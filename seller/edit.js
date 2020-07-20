let message;

function isInLimit(text, limit){
    if(text.split('').length < limit){
        return true;
    }else{
        return false;
    }
}

function isLess(productPrice, limit){
    if(Number(productPrice) < 100000){
        return true;
    }else{message='Product price is too much. ';return false;}
}


function edit(Product){
    return async (req, res, next)=>{
        try {
            let product = await Product.findById(req.query.Id);
            if(product.uploader === req.user._id){
                let updateQuerry = {};
                if(req.body.productName){
                    if(isInLimit(req.body.productName, 200)){
                        updateQuerry.productName = req.body.productName;
                    }else{
                        res.send('Wrong')
                    }
                    }
                if(req.body.productDiscription){
                    if(isInLimit(req.body.productDiscription, 1000)){
                        updateQuerry.productDiscription = req.body.productDiscription;
                    }else{
                        res.send('Wrong')
                    }
                }
                if(req.body.productPrice){
                    if(req.body.productPrice<100000){
                        updateQuerry.productPrice = req.body.productPrice;
                    }else{
                        res.send('Wrong')
                    }
                }
                let success = await Product.updateOne({_id: req.query.Id}, updateQuerry);
                req.success = success;
                next();
            }else{
                res.status(403).send('You are not the owner of the product')
            }
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = edit;