import { CountContext } from '@/contexts/CountContext'
import React, { useContext } from 'react'

export const OnlineUsers = () => {

    const countCtx = useContext(CountContext)

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }

    return (
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <button onClick={handleBanAll} className='my-2 p-2 bg-blue-700 text-white rounded-md'>Banir todo mundo</button>
        </>
    )
}
