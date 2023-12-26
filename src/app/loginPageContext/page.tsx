"use client"
import { Header } from '@/COMPONENTS/Header'
import { useRouter } from 'next/navigation'
import { usersList } from '../../data/DataUsers';
import React, { useContext, useEffect, useState } from 'react'
import { User } from '@/types/User';
import { UserContext } from '@/contexts/UserContext';


const Page = () => {

    const [users, setUsers] = useState<User[]>(usersList);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const context = useContext(UserContext)
    const router = useRouter();


    useEffect(() => {
        console.log(users)
    }, [users])


    const handleLogin = async (email: string, password: string) => {

        if (context) {

            let logged = await context.signIn(emailInput, passwordInput)

            if (logged) {
                router.push("/userLogged");
                setEmailInput("");
                setPasswordInput("");
            } else {
                setEmailInput("");
                setPasswordInput("");
                return;
            }
        }


        const user = users.find((user) => user.email === email);

        if (user) {
            if (user.password === password) {
                router.push("/userLogged")
            } else {
                alert("Password incorreto")
                setEmailInput("");
                setPasswordInput("");
            }
        } else {
            alert("Usuario nao existe")
            setEmailInput("");
            setPasswordInput("");
        }

    }


    return (
        <div className='bg-sky-800'>
            <div className='container h-screen mx-auto flex flex-col justify-center items-center'>
                <h1 className=' text-white font-bold text-3xl'>LOGIN</h1>
                <div className='max-w-md'>
                    <div className='my-3 flex flex-col'>
                        <label htmlFor="email" className='text-2xl mr-5 text-white'>Email: </label>
                        <input className='h-9 rounded-md px-2' id='email' name='email' type="text" onChange={(text) => setEmailInput(text.target.value)} />
                    </div>
                    <div className='my-3 flex flex-col'>
                        <label htmlFor="password" className='text-2xl mr-5 text-white'>Password: </label>
                        <input className='h-9 rounded-md px-2' id='password' name='password' type="password" onChange={(text) => setPasswordInput(text.target.value)} />
                    </div>
                    <button className='bg-blue-500 text-white rounded-md p-2 w-full mt-3' onClick={() => handleLogin(emailInput, passwordInput)}>Entrar</button>
                </div>
            </div>
        </div>

    )
}

export default Page