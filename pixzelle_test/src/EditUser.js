import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function EditUser() {

    const params = useParams()

    //  HOOKS
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [premiere, setPremiere] = useState('')
    const [company, setCompany] = useState('')
    const [consoles, setConsoles] = useState('')

    useEffect(() => {
        axios.post('/api/usuario/obtaindatauser', { idUser: params.idUser }).then(res => {
            console.log(res.data[0])
            const datauser = res.data[0]
            setName(datauser.name)
            setDescription(datauser.description)
            setPremiere(datauser.premiere)
            setCompany(datauser.company)
            setConsoles(datauser.consoles)
        })
    }, [])
    //FUNCION PARA EDITAR VIDEOJUEGO
    function editUser() {
        const updateUser = {
            name: name,
            idUser: params.idUser,
            description: description,
            premiere: premiere,
            company: company,
            consoles: consoles
        }

        //HACER PETICION DE AXIOS
        axios.post('/api/usuario/updateuser', updateUser)
            .then(res => {
                console.log(res.data)
                alert(res.data)
            })
            .then(err => console.log(err))
    }


    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Editar VIDEOJUEGO</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Descripción del Videojuego</label>
                        <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='premiere' className='form-label'>Fecha de Lanzamiento</label>
                        <input type="text" className='form-control' value={premiere} onChange={(e) => setPremiere(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='company' className='form-label'>Empresa Desarrolladora</label>
                        <input type="text" className='form-control' value={company} onChange={(e) => setCompany(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='consoles' className='form-label'>Consolas</label>
                        <input type="text" className='form-control' value={consoles} onChange={(e) => setConsoles(e.target.value)}></input>
                    </div>

                    <button onClick={editUser} className='btn btn-success'>Editar Videojuego</button>
                </div>
            </div>
        </div>
    )
}

export default EditUser