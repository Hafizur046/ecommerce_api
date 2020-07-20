+function createCat(Cat){
    return async (req, res)=>{
        if(req.isValidUser){
        if(req.user.permission === 'root'){
            let cat = new Cat();
            let cats = JSON.parse(req.body.cats);
            cat.cats = cats;
            try {
                let response = await cat.save();
                next();
            } catch (error) {
                throw error;
            }
        }
        }
    }
}

module.exports = createCat;