const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function isValidUser(Model){
    return async (req, res, next)=>{
        let token = req.headers['token'];
        if(token){
            // console.log(token+'from auth.js:7');
            let id = jwt.verify(token, 'Our little secret');
            // console.log(id);
            let user = await Model.findById(id);
            if(user == {}){req.isValidUser = false}else{
                console.log('valid user');
                req.isValidUser = true;
                req.user = user;
                next();
            }
        }else{
            req.isValidUser = false;
            req.user = undefined;
            next();
        }
    }
}

module.exports = isValidUser;