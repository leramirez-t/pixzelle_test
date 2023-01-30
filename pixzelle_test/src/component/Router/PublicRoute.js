import {PRIVATE} from 'config/router/paths'
import {Navigate, Outlet} from 'react-router-dom'
import {AuthContext} from '../Context/authContext'

export default function PublicRoute(){
    const {isAutenticated} = useAuthContext()

    if(isAutenticated){
        return <Navigate to={PRIVATE}/>
    }
}