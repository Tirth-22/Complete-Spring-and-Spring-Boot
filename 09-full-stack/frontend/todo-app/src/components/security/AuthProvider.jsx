import { useState,createContext,useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {return useContext(AuthContext)}

export default function AuthProvider({ children }) {

    const [number, setnumber] = useState(100)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    
    return(
        <AuthContext.Provider value={{number,isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}