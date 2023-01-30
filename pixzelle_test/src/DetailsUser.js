import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function DetailsUser({user}) {

    const navegar = useNavigate()

    //FUNCION PARA BORRAR VIDEOJUEGO
    function deleteuser(iduser){
        axios.post('/api/usuario/deleteuser', { iduser: iduser })
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navegar(0)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container mb-4'>

            <div className='row'>

                <div className='col-sm-6 offset-3'>

                    <ul className='list-group'>
                        <li className='list-group-item'>{user._id}</li>
                        <li className='list-group-item'>{user.name}</li>
                        <li className='list-group-item'>{user.description}</li>
                        <li className='list-group-item'>{user.premiere}</li>
                        <li className='list-group-item'>{user.company}</li>
                        <li className='list-group-item'>{user.consoles}</li>
                        
                    </ul>

                    <Link to={`/editUser/${user._id}`}><li className="btn btn-success mt-3">Editar</li></Link>
                    {/* <button className='btn btn-success mt-3'>Editar</button> */}
                    &nbsp;
                    <button className='btn btn-danger mt-3' onClick={()=>{deleteuser(user._id)}}>Borrar</button>
                    {/* <hr className='mt-4'></hr> */}
                    

                </div>


            </div>
        </div>
    )
}

export default DetailsUser