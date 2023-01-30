import React, { useEffect, useState } from 'react'
import DetailsUser from './DetailsUser'
import axios from 'axios'

function Users(){
    
    const[datausers, setdatausers]=useState([])

    //Paginación
    const [pageCrud, setPage] = useState(1)
    const [indPage, setindPage] = useState(2)

    const maxItem = datausers.length /indPage
    console.log(maxItem)

    useEffect(()=>{
        
        axios.get('api/usuario/obtainusers').then(res => {
            console.log(res.data)
            setdatausers(res.data)
            
        }).catch(err => {
            console.log(err)
        })
        
    }, [])

 
//MAPEAR  LISTA DE VIDEOJUEGOS 

    const userlist = datausers.map(user =>{
        return(
            
            <div>
                <DetailsUser user={user}/>
            </div>
        )
    })

    

    return(
        <div>
            <h2>Lista de Videojuegos</h2>

            {userlist}
        </div>
    )
}

export default Users