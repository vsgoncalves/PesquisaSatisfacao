const express= require('express')

const app = express()

app.listen('3000') 

//app.route('/').get((req,res)=> res.send("oi"))

//middleware
app.use(express.json())

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  // Pass to next layer of middleware
  next();
});

app.route('/').post( (req,res) => console.log(req.body) )

//DELETE
//app.route('/:identificador').delete( (req,res) => {
//    res.send(req.params.identificador)
//})

app.route('/').get( (req,res) => res.send("oi"))

//app.route('/:comentario').get( (req,res) => res.send( req.params.comentario ))

