const express= require('express')

const app = express()

app.listen('3000') 

//app.route('/').get((req,res)=> res.send("oi"))

//middleware
app.use(express.json())

app.route('/').post( (req,res) => console.log(req.body) )

//DELETE
//app.route('/:identificador').delete( (req,res) => {
//    res.send(req.params.identificador)
//})

app.route('/').get( (req,res) => res.send("oi"))

//app.route('/:comentario').get( (req,res) => res.send( req.params.comentario ))

