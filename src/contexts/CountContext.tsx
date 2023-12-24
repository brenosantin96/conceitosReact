import { ReactNode, createContext, useState } from "react";

type CountContextType = {
    onlineCount: number,
    setOnlineCount: (n: number) => void
}

export const CountContext = createContext<CountContextType | null>(null);

type PropsCountProvider = {
    children: ReactNode;
}

export const CountProvider = ({ children }: PropsCountProvider) => {

    const [onlineCount, setOnlineCount] = useState(45);

    return (
        <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
            {children}
        </CountContext.Provider>
    )

}