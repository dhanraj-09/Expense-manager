const express= require("express");
const database=require("./connect");
const ObjectId=require("mongodb").ObjectId;

let postRoutes=express.Router();


postRoutes.route("/database").post(async (req,res)=>{
    let db=database.getDb();
})
