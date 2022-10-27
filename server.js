const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.use(express.static('./public')) //führt alles im Ordner "public" auf "localhost" aus

app.post('/scoreboard',(req,res)=>{ //wenn ich localhost/scoreboard in die URL des Browsers eingebe, führe den Code in den Klammern aus
  console.log(req.body)
  res.send('Moin')
})

app.get('/scoreboard', (req, res) => { //wenn ich localhost/scoreboard in die URL des Browsers eingebe, 
  const connection = mysql.createConnection({ //verbinde dich mit der Datenbank, 
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'scoreboard'
  });
  connection.query("INSERT INTO `scorelist` (`id`, `Sterne`, `Muenzen`, `Popularitaet`, `Territorien`, `Ressourcen`, `Bonus`, `Fabrik`, `Gesamt`) VALUES (NULL, '5', '15', '8', '3', '2', '4', '0', '16')", function (error, results, fields) {//speicher die Daten dort ein und 
    
  connection.end(); //beende die Verbindung wieder
  });
  res.send('Hello World! asdasd')
})

app.listen(port) //lass den Express-Server auf den definierten Port laufen