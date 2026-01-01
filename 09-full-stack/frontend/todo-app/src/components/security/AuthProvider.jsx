import { useState,createContext,useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {return useContext(AuthContext)}

export default function AuthProvider({ children }) {

    const [number, setnumber] = useState(100)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [username, setusername] = useState(null)
    
    return(
        <AuthContext.Provider value={{number,isAuthenticated,setisAuthenticated, username, setusername}}>
            {children}
        </AuthContext.Provider>
    )
}