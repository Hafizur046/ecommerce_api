let message = 'Something is wrong';
let rawValidCats = require('../middlewares/test-cats.js');
let Cat = require('../models/cat.js');
let extractCats = require('../middlewares/extract.js');



async function isValidcat(rawCats, req){
    let cats = '';
    try {
        // let rawValidCats = await Cat.find();
        let extractedCats = extractCats(rawCats.cats, true);
        console.log(extractedCats);
        let isValid = false;
        for(i=0; i<extractedCats.length; i++){
            if(req.body.catagory == extractedCats[i]){
                console.log('shout out');
                isValid = true;
            }else{
                console.log('false', extractedCats[i], 'comparing', req.body.catagory)
            }
        }
        return isValid;




    } catch (error) {
        console.log(error);
    }
}



async function addProduct(req, Product){
    try {
        let product = new Product();
        product.uploader = req.user._id;
        product.productName = req.body.productName;
        product.productDiscription = req.body.productDiscription;
        product.productPrice = Number(req.body.productPrice);
        product.catagory = req.body.catagory;
        let paymentValidator = ['COD', 'Direct'];
        let upm = req.body.paymentMethods.split(' ');
        let isValidMethod = true;
        for(i=0; i<2; i++){
            if(upm[i] == paymentValidator[0] || upm[i] == paymentValidator[1]){}else{
                isValidMethod = false;
                message = 'Payment method is not valid';
                return;
                break;
            }
        }
        product.paymentMethods = upm;
        product.avgReviews = 0;
        product.searchRank = 0;
        
        let productId;
        let saved;
        let serchTags = handleTags(req.body.tags.toLowerCase());
        if(serchTags){
            product.tags = serchTags;
            saved = await product.save();
            return saved;
            // console.log('product saved')
        }else{
            return;
            // console.log('all five tags are not provided');
        }
    } catch (error) {
        console.log(error);
        res.send(message);
    }
}



async function updateShop(seller, productId, Shop){
    try {
        if(seller.sellerID){
            // console.log('its a fcuking seller:', productId);
            let shop = await Shop.find({_id: seller.sellerID});
            // console.log(shop)
            // console.log('SellerId:', req.user.sellerID)
            Shop.update({_id: seller.sellerID}, 
                {"$push" : {"products" : {"ProducttID": productId}}
            }).exec((err, success)=>{
                if(err){
                    console.log(err)
                }else{
            console.log('SellerID',seller.sellerID ,'ProductID:',productId,'update successfull:', success)
                    return success;
                }
            });
            // console.log(docs);         
        }else{
            res.send('You do not have a shop. ')
        }        
    } catch (error) {
        console.log('56:',error);
    }

}



function isvalidBody(body){
    if(body.productName){
        if(body.productName.split('').length < 200){
            if(body.productDiscription){
                if(body.productDiscription.split('').length < 5000){
                    if(body.productPrice){
                        if(Number(body.productPrice) < 100000){
                            return true;
                        }else{message='Product price is too much. ';return false;}
                    }
                }{message='Product discription too long. max : 5000char';return false;}
            }else{message='Product must contain a discription';return false;}
        }else{message='Product name too long. max : 200char';return false;}
    }else{message='Product must contain a name';return false;}
}



function handleTags(rawTags){
    if(!rawTags){message = new error('Tags must be provided'); return null}
    let tags = rawTags.split(' ');
    if(tags.length == 5){
        return rawTags;
    }else{
        message = new error('Tags are separeted using spaces and max:5 and min: 5');
        return undefined;
    }
    // console.log(req.body.tags);
}



function Upload(Product, User, Shop){
    return async (req, res, next)=>{
        if(req.isValidUser){
            if(isvalidBody(req.body)){
                try {
                    let validatedCat = await isValidcat(rawValidCats, req);
                    console.log('IsValidCatagory: ', validatedCat)
                    if(validatedCat){
                        let saved = await addProduct(req, Product);
                        let productId = saved._id;
                        let seller = await User.findById(req.user._id);
                        let shop = await updateShop(seller, productId, Shop);
                        next();
                    }else{
                        res.send('The catagory is not valid')
                    }
                }catch (error) {
                    if(error){
                        console.log(error);
                        // console.log('thats the spot')
                        res.status(500).send('Ops something went wrong')
                    }
                }
            }else{
                res.send(message);
            }
        }else{
            // next();
            res.send('You are not allowed to access this untill you sign in');
        }
    }
}

module.exports = Upload;