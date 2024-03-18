//----------------------Yeh Reflect Karega Api ----------------
//import the model
const Todo =require("../models/Todo1");

//define the routing Handler
const gettodo =async(req,res) => {
    try{
       
        //get new todoObject and insert it to db
        const todo= await Todo.find({})
        //Send a json Response with a Succes flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Entire Todo Data is Fetched   Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:true,
            data:"Server error",
            message:err.message,
        })
    }
}
module.exports ={ gettodo };


