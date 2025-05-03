// importing express
const express = require('express');
const path = require("path");

// creating app using express:
const app = express();

// server the static files from public folder 
app.use(express.static(path.join(__dirname,"public")));


// creating path for our website
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// to start listening to the reqs
app.listen(3000, ()=>{
    console.log(`server is running at {http://localhost:3000}`)
});

