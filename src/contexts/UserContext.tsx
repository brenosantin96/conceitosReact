"use client"

import { User } from "@/types/User";
import { ReactNode, createContext, useState } from "react";
import { usersList } from '../data/DataUsers';

type UserContextType = {
    user: User | null;
    signIn: (email: string, password: string) => boolean;
    signOut: () => void
}

export const UserContext = createContext<UserContextType | null>(null);

type PropsUserProvider = {
    children: ReactNode;
}

export const UserProvider = ({ children }: PropsUserProvider) => {

    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>(usersList);

    const signIn = (email: string, password: string) => {

        const user = users.find((user) => user.email === email);

        if (user) {
            if (user.password === password) {
                setUser(user);
                return true
            } else {
                setUser(null)
                alert("Password incorreto")
                return false;
            }
        } else {
            alert("Usuario nao existe")
            return false
        }

    }

    const signOut = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )

}