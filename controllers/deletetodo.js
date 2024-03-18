//----------------------Yeh Reflect Karega Api ----------------
//import the model
const Todo =require("../models/Todo1");
//----------------------------gettodosingle--------------
//define the routing Handler
const deletetodo=async(req,res) => {
    try{
       
      const{id}=req.params;
      await Todo.findByIdAndDelete(id);
      
       res.status(200).json({
        success:true,
        message:`Todo  Deleted Successfully `,
       })
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
module.exports ={ deletetodo };
