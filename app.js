const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("/index.html");
});

app.post("/",async (req,res)=>{
    console.log(req.body.number);

    const response= await fetch(url,option)
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    });

    console.log(response);
})


app.listen("3000",()=>{
    console.log("Server started on port 3000");
});