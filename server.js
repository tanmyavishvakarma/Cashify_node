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

app.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
  

    const sqlreg="INSERT INTO users (username,password) VALUES(?,?)"
    connection.query(sqlreg,[username,password],(err,result)=>{

    });
    res.send('user registered');
});

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const sqllog="SELECT * FROM users WHERE username=? AND password=?"
    connection.query(sqllog,[username,password],(err,result)=>{
        if(result.length>0){
            res.send(result);
        }else{
            res.send({message:"wrong username or password"});
        }

    });
    res.send('user registered');
});
app.listen(3000,()=>{
    console.log("running");
});
