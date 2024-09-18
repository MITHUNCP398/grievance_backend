const jwt= require('jsonwebtoken')

const jwtMidddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware fn");
    try {
        const token = req.headers['authorization'].split(" ")[1]
    if(token){
        jwtResponse=jwt.verify(token,process.env.JWT_SECRET);
        req.payload=jwtResponse.userId
        next()
    }else{
        res.status(401).json("invalid token")
    }
    } catch{
        res.status(403).json("please login")
    }

}


module.exports=jwtMidddleware