const express =require('express');
const cors = require('cors');
const mysql=require('mysql');
const bodyParser = require('body-parser');


const app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser({extended:true}));
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',    
    database:'testdb'
});
app.post('/addproject',function(req,res){
    const serialno=req.body.serialno;
    const brand=req.body.brand;
    const modelname=req.body.modelname;
 

  const sqlinsert="INSERT INTO devices (serialno,brand,modelname) VALUES (?,?,?)"
  connection.query(sqlinsert,[serialno,brand,modelname],(err,result)=>{

    });
    res.send('add');
});

app.listen(3000,()=>{
    console.log("running");
});