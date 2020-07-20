function getProducts(Model){
    return async (req , res , next)=>{
        let cat;
        if(req.query.cat == ''){}else{cat = req.query.cat}
        let result = {};
        let page = Number(req.query.page);
        let limit = Number(req.query.limit);
        let startIndex = (page-1)*limit;
        let endIndex = startIndex+limit;
        if(page>1){
            result.pre = {
                page: page-1,
                limit: limit
            }
        }
        if(await Model.countDocuments({catagory: cat}) >endIndex+1 ){
            console.log(await Model.countDocuments()+'why')
        result.next = {
            page: page+1,
            limit: limit
        };
        }
        try{    
        result.values = await Model.find({catagory: cat}).sort({dateUploaded: -1}).skip(startIndex).limit(limit);
        res.result = result;
        next();
        }catch(errs){
            console.log(errs)
        }
    }
}

module.exports = getProducts;