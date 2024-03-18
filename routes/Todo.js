const express=require('express');
const router = express.Router();

//import controller=>path of the controller
const {createtodo}=require("../controllers/createtodo");
const {gettodo}=require("../controllers/gettodo");
const {gettodoByID}=require("../controllers/gettodoById");
const {updatetodo}=require("../controllers/updatetodo");
const {deletetodo}=require("../controllers/deletetodo");

//define Api Routes
router.post('/createtodo',createtodo);
router.get('/gettodo',gettodo);
router.get('/gettodo/:id',gettodoByID);
router.put('/updatetodo/:id',updatetodo);
router.delete('/deletetodo/:id',deletetodo);
//Export the above file
module.exports = router;
