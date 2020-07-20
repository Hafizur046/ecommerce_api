let ms;

async function extract(expiresIn){
    let nExp = Number(expiresIn);
    if(nExp !== NaN){
        if(nExp >0){
            ms = nExp*24*60*60*1000
            return Date(nExp*24*60*60*1000);
        }else{
            return;
        }
    }else{
        return;
    }
}

function distroySale(product, Product){
    Product.update({_id: product._id}, {globalDiscount: {}}).exec((err, success)=>{
        if(err){
            console.log(err)
        }else{
            
        }
    })
}

function createSale(Product){
    return async (req, res, next)=>{
        let product = await Product.findById(req.body.productId);
        if(product.uploader === req.user._id){
            if(req.body.discount){
                if(req.body.discount < 100 && req.body.discount > 0){
                    let expiresIn = await extract(req.body.expiresIn);
                    if(expiresIn){
                        let querry = {
                            globalDiscount: {
                                discount: req.body.discount,
                                timeRemaining: expiresIn
                            }
                        }
                        let updated = await Product.update({_id: req.body.productId}. querry);
                        setTimeout(distroySale, ms, product, Product);
                        next();
                    }else{
                        res.send(`${expiresIn} is not an valid expiring session`);
                    }
                }
            }
        }else{
            res.send('You are not the owner of this product');
        }
    }
}

module.exports = createSale;