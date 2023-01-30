const express = require('express')
const app = express()

//IMPORTANDO CONEXION A MONGODB
const docDB = require('./conection')

//Importación del archivo de rutas y modelo usuario
const userrout = require('./rutas/user') 

//IMPORTANDO body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', userrout)

app.get('/', (req, res)=>{
    res.end('BIENVENIDO AL SERVIDO DE BACKEND, EJECUTANDO')
})

//Configurando server 
app.listen(5000, function(){
    console.log("EL SERVIDOR ESTA CORRIENDO EXITOSAMENTE")
})