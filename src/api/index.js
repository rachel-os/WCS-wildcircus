const express = require('express');
const mysql = require('mysql');
const api = express();
const bodyParser = require('body-parser');

api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json());
const connection = mysql.createConnection({
  host: "localhost" ,
  user: "root",
  database: "wildcircus",
  password: "password"
})

connection.connect((error) => {
  if (error) throw (error);
  console.log("mySQL connected!")
})

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
})

api.get('/',(req,res) => {
  res.send("Ok good");
})

api.get('/events', (req, res) => {
  connection.query("SELECT name, image, price, date, location_id FROM event", (error,result) => {
    if (error) throw error;
    res.send(result);
  });
});

api.post('/contact', (req,res)=> {
  const contactData = req.body;
  connection.query("INSERT INTO contact SET ?", contactData, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de la sauvegarde du contact.");
    } else {
      res.sendStatus(200);
    }
  });
});



api.listen(8000,(error)=> {
  if(error) {
    console.log(error);
  } else {
    console.log("API running...");
  }
})