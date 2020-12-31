import React, {useState, useEffect, createContext} from 'react';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggin, setIsLoggin] = useState(false);
    return (
        <AuthContext.Provider value={[isLoggin, setIsLoggin]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;