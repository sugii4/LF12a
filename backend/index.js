var http = require('http');

const app = http();

//Server mit XAMPP
http.createServer(function (req, res){
    res.write('Nodejs started using xampp');
    res.end();
}).listen(80);
console.log('http server started');

//Static Files
app.use(http.static('public'));
app.use('/css', http.static(__dirname + 'public/css'));
app.use('/js', http.static(__dirname + 'public/js'));

//Templating Engine
app.set('pages', './src/pages');
app.set('view engine', 'ejs');

//Routes
