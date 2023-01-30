import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function NewUser(){

    //HOOKS
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [premiere,setPremiere]=useState('')
    const [company,setCompany]=useState('')
    const [consoles,setConsoles]=useState('')

    function addUser(){
            var user={
                name:name,
                description: description,
                premiere: premiere,
                company: company,
                consoles: consoles,
                iduser:uniqid()
            }
            console.log(user)

            axios.post('/api/usuario/newuser', user)
                .then(res=>{
                alert(res.data)

               
            })
            .then(err=>console.log(err))
    }


    return(
        <div className='container'>

            <div className='row'>
                <h2 className='mt-4'>Crear Nuevo Videojuego</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nombre de Videojuego</label>
                        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Descripción del Videojuego</label>
                        <input type="text" className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='premiere' className='form-label'>Fecha de Estreno</label>
                        <input type="text" className='form-control' value={premiere} onChange={(e)=>setPremiere(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='consoles' className='form-label'>Consolas</label>
                        <input type="text" className='form-control' value={consoles} onChange={(e)=>setConsoles(e.target.value)}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='company' className='form-label'>Compañía Desarrolladora</label>
                        <input type="text" className='form-control' value={company} onChange={(e)=>setCompany(e.target.value)}></input>
                    </div>


                

                    <button onClick={addUser} className='btn btn-success'>Guardar Videojuego</button>
                </div>
            </div>
        </div>
    )
}

export default NewUser