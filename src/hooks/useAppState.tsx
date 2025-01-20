import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

type AppStateType = {
    editTodoId: number,
    isDrawerOpen: boolean,
}

const initialState: AppStateType = {
    editTodoId: -1,
    isDrawerOpen: false,
};

type AppStateContextType = {
    appState: {
        editTodoId: number,
        isDrawerOpen: boolean,
    }
    setAppState: Dispatch<React.SetStateAction<{ editTodoId: number, isDrawerOpen: boolean }>>;
};

export const AppState = createContext<AppStateContextType>({
    appState: initialState,
    setAppState: () => { },
});

export const useAppState = () => useContext(AppState);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
    const [appState, setAppState] = useState(initialState);

    return (
        <AppState.Provider value={{ appState, setAppState }}>
            {children}
        </AppState.Provider>
    );
};





