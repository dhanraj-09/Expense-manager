const {MongoClient, ServerApiVersion} = require('mongodb');

require("dotenv").config({path:"./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        keepAlive:true,
        socketTimeoutMS:360000,
    },
});


let database;
module.exports = {
    connectToServer:()=>
    {
        database=client.db("Blogdata");
    },
    getDb:()=>{
        return database;const {MongoClient, ServerApiVersion} = require('mongodb');

        require("dotenv").config({path:"./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(process.env.ATLAS_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
                keepAlive:true,
                socketTimeoutMS:360000,
            },
        });


        let database;
        module.exports = {
            connectToServer:()=>
            {
                database=client.db("Blogdata");
            },
            getDb:()=>{
                return database;
            }
        }

        console.log("chutiya ishan");

    }
}

console.log("chutiya ishan");

