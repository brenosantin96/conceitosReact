"use client"

import Square from '@/COMPONENTS/Square';
import { listReducer } from '@/reducers/listReducer';
import { Item } from '@/types/Item';
import React, { useReducer, useState } from 'react'

const Page = () => {

    const [list, dispatch] = useReducer(listReducer, []);

    const handleAddClick = () => {
        dispatch({
            type: 'add',
            payload: {
                text: 'NovoItemTaAqui'
            }
        })
    }

    

    return (
        <div className=''>

            <button onClick={handleAddClick}>Adicionar</button>

        </div>
    )
}

export default Page