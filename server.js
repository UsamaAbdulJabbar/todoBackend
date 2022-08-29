const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRoute  = require("./Routes/todoRoute.js");
const cors = require("cors")
mongoose.connect(
    "mongodb+srv://usamaahmed:usama1527@cluster0.9vjwpbn.mongodb.net/?retryWrites=true&w=majority",
    (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Mongo DB Connected Successfully...");
        }
    }
);

app.use(express.json());
app.use(cors());
app.use("/todo",todoRoute);
app.listen(7000);