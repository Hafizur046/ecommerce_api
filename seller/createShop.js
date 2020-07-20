let message;
function isValid(req){
    if(req.shopName){
        if(req.shopName.split('').length < 200){
            if(req.sellerType){
                if(req.sellerType == 'Individual' ||req.sellerType == 'Business'){
                    return true;
                }
            }
        }else{message='shopName should be less than 200char'; return false}
    }else{message='shopName is required'; return false}
}

function createShop(Model, User){
    return async (req, res, next)=>{
        if(req.isValidUser){
            if(isValid(req.body)){
                let shopName = req.body.shopName;
                let sellerType = req.body.sellerType;
                let shop = new Model();
                shop.shopName = shopName;
                shop.sellerType = sellerType;
                try {
                    if(req.user.sellerID){
                        res.send('You are not allowed to make multiple shops')
                    }else{
                        let response = await shop.save();
                        let querry = {
                            'sellerID': response._id
                        }
                        let result = await User.findByIdAndUpdate(req.user._id, querry, {useFindAndModify: true});
                        req.user.sellerID = response._id
                        next()
                    }
                } catch (error) {
                    console.log(error);
                }
            }else{
                res.send('Request is not valid')
            }
        }else{
            res.send('You are not authenticated to access this page')
        }
    }
}

module.exports = createShop;