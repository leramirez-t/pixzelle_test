const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const scheme = mongoose.Schema

const schemeUser = new scheme({
    name: String,
    idUser: String,
    description: String,
    premiere: String,
    company: String,
    consoles: String

})

const UserModel = mongoose.model('users', schemeUser)
module.exports = router


// router.get('/example', (req, res)=>{
//     res.end('Saludo carga desde ruta ejemplo')
// })

//AGREGAR Videojuego
router.post('/newuser', (req, res) => {
    const newuser = new UserModel({
        name: req.body.name,
        idUser: req.body.idUser,
        description: req.body.description,
        premiere: req.body.premiere,
        company: req.body.company,
        consoles: req.body.consoles
    })
    newuser.save(function (err) {
        if (!err) {
            res.send('Videojuego agregado correctamente')
        } else {
            res.send(err)
        }
    })
})


//OBTENER TODOS LOS VIDEOJUEGOS
router.get('/obtainusers', (req, res) => {
    UserModel.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })

})

//OBTENER INFORMACION DE EL VIDEOJUEGO
router.post('/obtaindatauser', (req, res) => {
    UserModel.find({ idUser: params.idUser }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })

})

//ACTUALIZAR USUARIO
router.post('/updateuser', (req, res) => {

    UserModel.findOneAndUpdate({ iduser: req.body.iduser }, {
        name: req.body.name,
        description: req.body.description,
        premiere: req.body.premiere,
        company: req.body.company,
        consoles: req.body.consoles
    },(err)=>{
        if (!err) {
            res.send("VIDEOJUEGO ACTUALIZADO CORRECTAMENTE")
        } else {
            res.send(err)
        }
    })
})



//BORRAR USUARIO
router.post('/deleteuser', (req, res) => {

    UserModel.findOneAndDelete({ iduser: req.body.iduser },(err)=>{
        if (!err) {
            res.send("VIDEOJUEGO BORRADO CORRECTAMENTE")
        } else {
            res.send(err)
        }
    })
})

