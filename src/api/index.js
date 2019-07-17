const express = require('express');
const mysql = require('mysql');
const api = express();
const bodyParser = require('body-parser');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
  extended: true
}));

api.use((req, res, next) => {
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

api.get('/events', (req, res) => {
  connection.query("SELECT name, image, price, date, location_id FROM event", (error,result) => {
    if (error) throw error;
    res.send(result);
  });
});

api.post('/contact', (req,res)=> {
  const contactData = req.body;
  connection.query("INSERT INTO contact SET ?", contactData, (error, res) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de la sauvegarde du contact.");
    } else {
      console.log(res);
      res.sendStatus(200);
    }
  });
});

connection.connect((error) => {
  if (error) throw (error);
  console.log("mySQL connected!")
})

api.listen(8000,(error)=> {
  if(error) {
    console.log(error);
  } else {
    console.log("API running...");
  }
})