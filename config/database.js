//Database Connection
const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect =()=>{

    if (!process.env.DATABASE_URL) {
        console.error("DATABASE_URL is not defined in the environment variables.");
        process.exit(1);
      }
//   mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.connect(process.env.DATABASE_URL,{ })
    .then(()=> console.log("DataBase  Connection is Successful"))
    .catch((error)=>{
        console.log("Issues in DataBase Connection"); 
        console.error(error.message);
        process.exit(1);
    });
}
module.exports= dbConnect;