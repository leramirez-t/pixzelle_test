const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudpixzelle');

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log("CONEXION EXITOSA A MongoDB")})

objectbd.on('error', ()=>{console.log("ERROR EN LA CONEXION A MongoDB")})

module.exports = mongoose