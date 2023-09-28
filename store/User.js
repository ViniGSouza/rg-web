"use client"
import { createContext, useContext, useState } from "react";
import { getCookie, setCookie } from "./Cookie";

// Defina a interface para o estado
const initialState = {
    phpsession: getCookie("s") || "",
};

// Crie um contexto para o UserStore
const UserContext = createContext();

// Componente de provedor de contexto para o UserStore
export function UserStoreProvider({ children }) {
    const [state, setState] = useState(initialState);

    // Função para definir a sessão e atualizar o cookie
    function setSession(session) {
        setCookie("s", session, 365);
        setState({ ...state, phpsession: session });
    }

    const contextValue = {
        state,
        setSession,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

// Um gancho personalizado para usar o UserStore
export function useUserStore() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserStore deve ser usado dentro de um UserStoreProvider");
    }
    return context;
}