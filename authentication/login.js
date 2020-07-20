const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const express = require('express')
// jwt.sign()
// const bodyParser = require('body-parser');
//set body-parser
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())
function isValidLoginInfo(user){
    if(user.username){
        if(user.password){
            return true;
        }else{return false}
    }else{return false}
}
async function login(req, res, Model){
    if(isValidLoginInfo(req.body)){
        console.log('valid')
        try {
            let user = await Model.findOne({username: req.body.username});
            let validPassword = bcrypt.compareSync(req.body.password, user.password);
            if(validPassword){
                let token = jwt.sign(user._id, 'Our little secret');
                res.setHeader('token', token);
                return token;
            }else{
                return null;
            }
        } catch (error) {
            
        }
    }
}
module.exports = login;