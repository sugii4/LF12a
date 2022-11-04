const express = require('express')
const mysql = require('mysql')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const connection = mysql.createConnection({ //verbinde dich mit der Datenbank, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'scoreboard'
});
console.log("database connected")

app.use(express.static('./public')) //führt alles im Ordner "public" auf "localhost" aus
app.use(bodyParser.urlencoded({extended: true}));

app.post('/scoreboard',(req,res)=>{ //wenn ich localhost/scoreboard in die URL des Browsers eingebe, führe den Code in den Klammern aus
  let body = req.body
  console.log(body)
  connection.query(`INSERT INTO scorelist (Sterne, Muenzen, Popularitaet, Territorien, Ressourcen, Bonus, Fabrik, Gesamt) VALUES (${body.sterne},${body.muenzen}, ${body.popularitaet}, ${body.territorien}, ${body.ressourcen}, ${body.bonus}, ${body.fabrik}, ${body.gesamt})`,function(error, results, fields) {
    if (error) {
      res.json({success:false,message:error.toString()})
      console.log("errorrr")
    } else {
      res.json({success:true})
    }
  })
})

app.get('/scoreboard', (req, res) => { //holt Daten
  connection.query("SELECT * FROM scorelist", function (error, results, fields) {
    res.json(results[0])
  })
})  

//mysql heartbeat
setInterval(function () {
  connection.query('SELECT 1');
  }, 5000);

app.listen(port) //lass den Express-Server auf den definierten Port laufen