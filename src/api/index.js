const express = require('express');
const mysql = require('mysql');
const api = express();

api.use((req,res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

api.get('/',(req,res) => {
  res.send("Ok good");
})

const connection = mysql.createConnection({
  host: "localhost" ,
  user: "root",
  database: "wildcircus",
  password: "password"
})

api.get('/events', (req,res) => {
  connection.query("SELECT * FROM event", (err,result) => {
    if (err) throw err;
    res.send(result);
  });
});

connection.connect((err) => {
  if (err) throw (err);
  console.log("mySQL connected!")
})

api.listen(8000,(err)=> {
  if(err) {
    console.log(err);
  } else {
    console.log("API running...");
  }
})