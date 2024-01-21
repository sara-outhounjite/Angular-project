const express = require('express')
const path = require("path");

const PORT=process.env.PORT || 80;
const HOST = process.env.HOST;

const app = express();
app.use("/",express.static(path.join(__dirname,"dist")));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"dist","index.html"));

});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
});