// isBanned: false



async function search(req, Model){
    try {
        let searchExp = new RegExp(req.query.searchKey, 'gi');
        let searchCat = new RegExp(req.query.searchCat, 'gi')
        console.log(searchExp)
        let result = {};
        let page = Number(req.query.page);
        let limit = Number(req.query.limit);
        let startIndex = (page-1)*limit;
        let endIndex = startIndex+limit;
        console.log('Page: ', page, 'Limit: ', limit, 'startIndex', startIndex, 'Endindex: ', endIndex);
        if(page>1){
            result.pre = {
                page: page-1,
                limit: limit
            }
        }
        if(await Model.countDocuments({catagory: searchExp}) >endIndex+1 ){
            result.next = {
                page: page+1,
                limit: limit
            }
        }  
        let querry = {$and: [{$or: [{productName: searchExp}, {tags: searchExp}]}]};
        result.values = await Model.find(querry).skip(startIndex).limit(limit);
        return result;
    } catch (error) {
            console.log(error)
            return;
    }
}


function getProducts(Model, isSearched){
    return async (req , res , next)=>{
        let cat;
        if(req.query.cat == ''){}else{cat = req.query.cat}
        let searchExp = new RegExp(req.query.cat, 'gi');
        console.log(searchExp)
        let result = {};
        let page = Number(req.query.page);
        let limit = Number(req.query.limit);
        let startIndex = (page-1)*limit;
        let endIndex = startIndex+limit;
        console.log('Page: ', page, 'Limit: ', limit, 'startIndex', startIndex, 'Endindex: ', endIndex)
        if(page>1){
            result.pre = {
                page: page-1,
                limit: limit
            }
        }
        if(await Model.countDocuments({catagory: searchExp}) >endIndex+1 ){
            console.log(await Model.countDocuments()+'why')
        result.next = {
            page: page+1,
            limit: limit
        };
        }
        try{  
        let searchCat = req.query.cat;
        console.log('Searched Cat: ', searchCat);
        if(isSearched){res.result = await search(req, Model);next()}else{
            if(req.query.cat){
                result.values = await Model.find({catagory: searchExp}).sort({dateUploaded: -1}).skip(startIndex).limit(limit);
                res.result = result;
                next();
            }else{
                result.values = await Model.find().sort({dateUploaded: -1}).skip(startIndex).limit(limit);
                res.result = result;
                next();  
            }
        }
        }catch(errs){
                console.log(errs)
        }
        
    }
}

module.exports = getProducts;