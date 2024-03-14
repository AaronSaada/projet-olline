import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const ContextProvider = ({children}) => {
  const [user, currentUser] = useState(JSON.parse(localStorage.getItem("accessToken")) || null)
  
  useEffect(() => {
   localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}