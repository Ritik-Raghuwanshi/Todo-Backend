//import the model
const Todo =require("../models/Todo1");

//define the routing Handler
exports.createtodo =async(req,res) => {
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //create new todoObject and insert it to db
        const response= await Todo.create({title,description});
        //Send a json Response with a Succes flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:true,
            data:"Internal Server error",
            message:err.message,
        })
    }
}