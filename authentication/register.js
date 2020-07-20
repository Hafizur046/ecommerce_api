const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const express = require('express')
// jwt.sign()
// const bodyParser = require('body-parser');
//set body-parser
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())
function isValid(user){
    // console.log(user)
    if(user.username){
        if(user.email){
            parts = user.email.split('@');
            if(parts.length === 2){
                if(user.password){
                    if(user.fullName){
                        return true;
                    }else{return false}
                }else{return false}
            }else{return false}
        }else{return false}
    }else{return false}
}
function Register(Model){
    return async(req, res, next)=>{
        let thisis = {};
        thisis.username = req.body.username;
        thisis.password = req.body.password;
        thisis.email = req.body.email;
        thisis.fullName = req.body.fullName;
        // console.log(thisis)
        // res.send('trigured')
        console.log('trigured')
        if(isValid(thisis)){
        try {
            let user = await Model.findOne({username: req.body.username}).exec();
            if(user){
                console.log(user);
                return res.send('Username already taken');
            }else{
                let thisUser = new Model();
                thisUser._id = Number(await Model.countDocuments());
                thisUser.username = req.body.username;
                let salt = bcrypt.genSaltSync(10);
                let hashedPassword = bcrypt.hashSync(req.body.password, salt);            
                thisUser.password = hashedPassword;
                thisUser.email = req.body.email;
                thisUser.fullName = req.body.fullName;
                let completed = await thisUser.save();
                req.user = completed;
                console.log(completed)
                let token = jwt.sign(completed._id, 'Our little secret');
                res.setHeader('token', token);
                return next();
            }

        } catch (error) {
            console.log(error);
            res.status(400);
            res.send('Something went wrong')
        }
        }else{
            // next();
            return res.send('Provide all fields')
        }
    }
}
module.exports = Register;