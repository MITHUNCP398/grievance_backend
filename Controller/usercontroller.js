const user=require('../Model/userModel')
const jwt = require('jsonwebtoken')



//register

exports.register=async (req,res)=>{
    const{name,email,password}=req.body


    console.log("inside register controller function");
    try{
        //check  existing superhero 
    const existingUser =await user.findOne({email})
    console.log(existingUser);

    if(existingUser){
       return res.status(406).json("You are already exist!! please login...")
    }else{
        const newUser=new user({
            name,email,password
        })
        await newUser.save()
      return  res.status(200).json(newUser)
    }

    }catch(err){
        res.status(401).json(err)

    }


    res.status(200).json("register request received")
}


//login

exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
        //check  exist or not
        const existingUser = await user.findOne({email})
        if(existingUser){
            if(existingUser.password == password) {
                //generate tocken
                const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
               return res.status(200).json({message: "Login success",data: existingUser, token})
            }else {
              return  res.status(400).json({message: "Incorrect password"})
            }
    }else{
      return res.status(406).json("Invalid email")
    }
       
    }catch(err){
        console.log('error',err)
       return res.status(401).json(err)

    }
}






