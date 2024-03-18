import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const ContextProvider = ({children}) => {
  // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("accessToken")) || null)
  
  // useEffect(() => {
  //  localStorage.setItem("user", JSON.stringify(currentUser))
  // }, [currentUser])

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const login = async(inputs) => {
    const res = await axios.post("http://localhost:4000/auth/connexion", inputs, {
      withCredentials: true
    })

    setCurrentUser(res.data)
    console.log(currentUser)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
}