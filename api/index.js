
const express= require('express')
const cors = require('cors')
const app = express()

port = process.env.PORT || 3000;

//middleware
app.use(express.json())

var corsOptions = {
  origin: 'https://carbografite.com.br/pesquisadesatisfacao/index.html',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

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

var routes = require('./routes/pesquisaroutes');
routes(app);

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`)
})
