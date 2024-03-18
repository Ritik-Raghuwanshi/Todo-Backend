//----------------------Yeh Reflect Karega Api ----------------
//import the model
const Todo =require("../models/Todo1");
//----------------------------gettodosingle--------------
//define the routing Handler
const updatetodo=async(req,res) => {
    try{
       
      const{id}=req.params;
      const{title,description}=req.body;

      const todo= await Todo.findByIdAndUpdate(
        {
            _id:id
        },
        {
            title,description,updateAT:Date.now()
        }
      )
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} updated Successfully `,
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
module.exports ={ updatetodo };
