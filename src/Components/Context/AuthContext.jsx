import React, { createContext, useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";

export const authContext = createContext()

// TOKEN
export default function AuthContextProvider({ children }) {

    const [token, setToken] = useState(function () {
        return localStorage.getItem('tkn')
    });



    const [userData, setUserData] = useState(null)

    function decryptUserToken() {
        const res = jwtDecode(token);
        console.log(res);
        setUserData(res)
    }
    useEffect(() => {

        if (token) {
            decryptUserToken()
        }
    }, [token])

    // useEffect(function () {
    //     console.log('refresh');
    //     const tkn = (localStorage.getItem('tkn'))

    //     if (tkn != null) {
    //         setUserToken(tkn)
    //     } 

    // }, [])

    return (
        <authContext.Provider value={{ setToken, token, userData }} >



            {children}

 

        </authContext.Provider>
    )
}
