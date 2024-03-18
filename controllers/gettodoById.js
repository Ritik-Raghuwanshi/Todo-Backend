//----------------------Yeh Reflect Karega Api ----------------
//import the model
const Todo =require("../models/Todo1");
//----------------------------gettodosingle--------------
//define the routing Handler
const gettodoByID=async(req,res) => {
    try{
       
       const id=req.params.id;
       const  todo=await Todo.findById( {_id: id})
       //Data for given id Not found
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data Found for given Id",
        })
        }
       //Data found for given Id
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data Successfully Fetched`,
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
module.exports ={ gettodoByID };
