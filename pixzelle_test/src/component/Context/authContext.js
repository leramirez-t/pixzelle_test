import { createContext, useCallback, useMemo, useState } from "react";
import PropTypes from 'prop-types'

const my_auth_app = 'MY_AUTH_APP_1'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [isAutenticated, setAutenticated] = useState(window.localStorage.getItem(my_auth_app)??false)

    const login = useCallback(function () {
        window.localStorage.setItem(my_auth_app, true);
        setAutenticated(true);

    }, [])

    const logout = useCallback(function () {
        window.localStorage.removeItem(my_auth_app);
        setAutenticated(false);

    }, [])

    const value = useMemo(() => ({
        login,
        logout,
        isAutenticated
    }), [login, logout, isAutenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}