import {createContext, useEffect, useState} from 'react';
import { getSession, setJWT } from '../utils/api';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const oldJWT = localStorage.getItem("jwt")
        if (oldJWT) {
            setLoading(true)
            setJWT(`Bearer ${oldJWT}`)
            getSession()
                .then( data => {
                    setUser(data.user)
                    localStorage.setItem("jwt", data.jwt)
                    setJWT(`Bearer ${data.jwt}`)
                })
                .catch(err => console.warn(err))
                .finally(() => setLoading(false))
        }
    }, [])

    const logout = () => setUser(null);

    return <AuthContext.Provider value={{
        user,
        setUser,
        logout
    }}>{!loading ? children : "Loading..."}</AuthContext.Provider>;
}
