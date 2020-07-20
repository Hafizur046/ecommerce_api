function administrative(){
    return (req, res, next)=>{
        if(req.isValidUser){
            if(req.user.permission === "root"){
                next()
            }else{
                console.log("Administrative access attempt!");
                console.log("User:", req.user);
                res.status(404).send("Page not found")
            }
        }else{
            res.send('Login First')
        }
    }
}

module.exports = administrative;