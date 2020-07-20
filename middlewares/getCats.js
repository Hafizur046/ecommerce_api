let rawValidCats = require('./test-cats.js');

function getCats(Catagory){
    return async (req, res, next)=>{
        //Fetch cats from database
        res.send(rawValidCats);
    }
}