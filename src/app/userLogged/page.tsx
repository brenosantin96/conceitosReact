"use client"
import { UserContext } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const UserLogged = () => {


    const router = useRouter();
    const context = useContext(UserContext)

    const handleLogout = () => {
        router.push("/");
    }

    return (


        <div className='bg-sky-800'>
            <div className='container h-screen mx-auto flex flex-col justify-center items-center'>

                <div>
                    <p className='text-4xl text-white font-semibold my-4'>{`Usuario Logado: ${context?.user?.name}`}</p>
                    <button className='bg-blue-500 text-white rounded-md p-2 w-full' onClick={handleLogout}>Sair</button>
                </div>
            </div>
        </div>


    )
}

export default UserLogged;
