


let middlewareHeader = function(req,res,next){
    
    let isFreeAppUser = req.headers["isfreeappuser"]
     
    if(isFreeAppUser != undefined){
    
        next();
    
}else{

    res.send("request is missing a mandatory header")

}

}
module.exports.middlewareHeader = middlewareHeader