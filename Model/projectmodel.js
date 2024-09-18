const mongoose=require('mongoose')

const projectSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    grievance:{
        type:String,
        required:true
    }

})

const project = mongoose.model("Projects",projectSchema)
module.exports= project;