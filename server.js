var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    QRS = require("./qrs"),
    morgan = require('morgan');
    

try{
  var config = require('./config');
  if(config){
    for(var c in config){
      process.env[c] = config[c];
    }
  }
}
catch(err){
  //No configuration file found. Not an issue if deploying on heroku for example
}

app.use(morgan('combined'))

process.env.appRoot = __dirname;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(__dirname+"/public"))
app.use('/assets', express.static(__dirname+"/assets"))
app.use('/etc', express.static(__dirname+"/etc"))
app.use('/node_modules', express.static(__dirname+"/node_modules"))

app.get('/ticket', function(req, res){
  console.log('Getting Ticket');
  console.log(process.env.appRoot);
  QRS.getTicket(function(err, ticket){
    if (err) {
      res.json(err);
    }
    else {
      res.json(ticket);
    }
  })
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/src/index.html');
});


app.listen(1981, function(){
  console.log("Server listening on port 1981");
});

