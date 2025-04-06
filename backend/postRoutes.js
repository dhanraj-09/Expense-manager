const express= require("express");
const database=require("./connect");
const ObjectId=require("mongodb").ObjectId;
const object = require("./dashboard.json");

let postRoutes=express.Router();


// postRoutes.route("/total").post(async (req,res)=>{
//     let db=database.getDb();
//     let data=await db.collection("total").insertOne(object);
//     res.json(data);
//     console.log(data );
// })

const id="67f07f58975d728ab5f79736";
const objectID=new ObjectId(id);
postRoutes.route("/balance").get(async (req,res)=>{
    let db=database.getDb();
    let key="total balance"
    let data=await db.collection("total").findOne({_id:objectID});
    try
    {
        res.json(parseFloat(data[key]));
    }
    catch (e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
        res.status(500).json({error: e.message});
    }

})
postRoutes.route("/spending").get(async (req,res)=>{
    let db=database.getDb();
    let key="total spending"
    let data=await db.collection("total").findOne({_id:objectID});
    try
    {
        res.json(parseFloat(data[key]));
    }
    catch (e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
        res.status(500).json({error: e.message});
    }

})

postRoutes.route("/recieved").get(async (req,res)=>{
    let db=database.getDb();
    let key="total recieved"
    let data=await db.collection("total").findOne({_id:objectID});
    try
    {
        res.json(parseFloat(data[key]));
    }
    catch (e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
        res.status(500).json({error: e.message});
    }

})



module.exports=postRoutes;


