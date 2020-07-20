function requiredValidation(){
    return (req, res, next)=>{
        if(req.isValidUser){
            next();
        }else{
            res.send('This resource requires validation')
        }
    }
}

module.exports = requiredValidation;