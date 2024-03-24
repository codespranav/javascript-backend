import express from "express"

import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: './env'
});

const app = express();
connectDB();














// (async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log(error);
//             throw error;
//         })
//     } catch (error) {
//         console.error("error occurred: ", error);
//         throw error
//     }
// })