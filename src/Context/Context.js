import React, { createContext } from 'react';
import app from '../Firebase/Firebase';
import {getAuth} from 'firebase/auth';

const auth = getAuth(app);
const AuthContext = createContext();

const Context = ({children}) => {

    const userInfo = {};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;