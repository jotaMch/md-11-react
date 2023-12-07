import React, { createContext, useContext, useState } from "react";

const Register = createContext();

export function ProviderDados({ children }) {
    const [users, setUsers] = useState([]);

    return (
        <Register.Provider value={{ users, setUsers }}>
        {children}
        </Register.Provider>
    );                                                                                                                    
}

export function useRegister() {
    return useContext(Register);
}

export default Register;
