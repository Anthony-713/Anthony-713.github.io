const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello word");
});

app.post("/upload", (req,res)=>{
   console.log(req.files.file);
   res.send(`Archivo ${req.files.file.name} subido.`);
});

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});