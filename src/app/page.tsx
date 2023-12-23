"use client"

import Square from '@/COMPONENTS/Square';
import { TodoComponent } from '@/COMPONENTS/TodoComponent';
import { listReducer } from '@/reducers/listReducer';
import { Item } from '@/types/Item';
import React, { useEffect, useReducer, useState } from 'react'

const Page = () => {

    const [list, dispatch] = useReducer(listReducer, []);

    const [inputTodo, setInputTodo] = useState("");


    useEffect(() => {
        console.log(list)
    }, [list])


    const handleAddTodo = (newTodo: string) => {
        dispatch({
            type: 'add', payload: {
                text: newTodo
            }
        })
    }

    const handleEdit = (id: number, newText: string) => {
        dispatch({
            type: 'editText', payload: {
                id: id,
                newText: newText
            }
        })
    }

    const handleToggle = (id: number) => {
        dispatch({
            type: 'toggleDone', payload: {
                id: id
            }
        })
    }

    const handleDelete = (id: number) => {
        dispatch({
            type: 'remove', payload: {
                id: id
            }
        })
    }


    return (
        <div className='bg-orange-400 h-screen w-screen'>
            <div className='container mx-auto border h-screen w-full flex flex-col justify-center items-center'>
                Lista de Tarefas
                <div className='max-w-md p-2 border-2 border-slate-500'>
                    <div>
                        <input onChange={(e) => setInputTodo(e.target.value)} type="text" />
                        <button onClick={() => handleAddTodo(inputTodo)} className='p-2 mx-2 border-slate-300 bg-slate-200 rounded-md text-black font-semibold'>Adicionar Tarefa</button>
                    </div>
                    <ul>
                        {list.map((item) => (
                            <TodoComponent key={item.id} id={item.id} text={item.text} done={item.done}
                                handleToggle={() => handleToggle(item.id)}
                                handleEdit={() => handleEdit(item.id, inputTodo)}
                                handleExclude={() => handleDelete(item.id)} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page