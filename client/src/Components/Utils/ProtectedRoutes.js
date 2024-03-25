import { Outlet, Navigate } from 'react-router-dom'

const user = JSON.parse(localStorage.getItem("user"))

export const PrivateRoutesAdmin = () => {
    return(
        user && user.role === "admin" ? <Outlet/> : <Navigate to="/"/>
    )
}

export const PrivateRoutesAuthenticated = () => {
    return(
        user === null ? <Outlet/> : <Navigate to="/" />
    )
}
