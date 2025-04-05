const connect=require('./connect');
const express=require('express');
const cors=require("cors");
const posts=require("./postRoutes");


const app=express();
const PORT =3000;



app.use(cors({
    origin: '*'
}));


app.use(express.json());
app.use(total);


app.listen(PORT,()=>{
    connect.connectToServer();
    console.log(`Server running on port ${PORT}`);
})



































