require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const btoa = require("btoa");

const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("/index.html");
});



app.post("/",async (req,res)=>{
    
    const AuthId= process.env.AuthID;
    const AuthSecretId = process.env.AuthSecretID;
    const basicAuth = `${AuthId}:${AuthSecretId}`;
    const encodedAuth = btoa(basicAuth);
    
    const url= `https://api.tiniyo.com/v1/Account/${AuthId}/Verifications`;
    const options={
        method:"POST",
        headers:{
            "Authorization": `Basic ${encodedAuth}`,
            "content-type": "application/json"
        },
        body:JSON.stringify({
            "dst":`91${req.body.number}`
        })
    };
    const response= await fetch(url,options)
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    });

});


app.listen("3000",()=>{
    console.log("Server started on port 3000");
});