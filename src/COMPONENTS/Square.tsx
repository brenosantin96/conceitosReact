import React, { useEffect } from 'react'

const Square = () => {

    useEffect(() => {
        console.log("Rodou o effect do quadrado");

        return () => {
            console.log("RODOU O CLEANUP")
        }
        
    }, [])

    return (
        <div className='w-40 h-40 bg-red-400'>

        </div>
    )
}

export default Square