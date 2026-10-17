import express from "express";
import  dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import mongoose from "mongoose"

    dotenv.config();

const app = express();

app.use("/",authRoutes)





mongoose.connect("mongodb://localhost/twitter").then(() =>{
    console.log("mongodb connecting successfully...");
    
}).catch((error) =>{
    console.log(error.message);
    
})



const PORT = process.env.PORT || 7000;
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}...`);
    
})

