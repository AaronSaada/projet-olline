import { Outlet, Navigate } from 'react-router-dom'

const user = JSON.parse(localStorage.getItem("user"))

export const PrivateRoutesAdmin = () => {
    console.log(user.role)
    return(
        user.role == "admin" ? <Outlet/> : <Navigate to="/"/>
    )
}

export const PrivateRoutesAuthenticated = () => {
    return(
        user === null ? <Outlet/> : <Navigate to="/" />
    )
}
