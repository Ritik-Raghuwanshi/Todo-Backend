//Writing Schema Todo Kya Kya Contain Karenga
const mongoose =require('mongoose');
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50,

    },
    description:{
        type:String,
        required:true,
        maxlength:50,
    },
    createdAT:{
        type:String,
        required:true,
        default:Date.now(),
    },
    updateAT:{
        type:String,
        required:true,
        default:Date.now(),
    }
    //Schema define karne ke baad Use Export Karna H
});
module.exports = mongoose.model("Todo",todoSchema);