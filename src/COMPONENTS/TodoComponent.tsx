import React from 'react'

type Props = {
    id: number;
    text: string;
    done: boolean;
    handleExclude: (id: number) => void;
    handleEdit: (id: number) => void;
    handleToggle: (id: number) => void;
}

export const TodoComponent = ({ id, text, done, handleExclude, handleEdit, handleToggle }: Props) => {


    const excludeItem = () => {
        handleExclude(id);
    }

    const editItem = () => {
        handleEdit(id);
    }


    const toggleItem = () => {
        handleToggle(id);
    }

    return (
        <li>
            <input type="checkbox" className='w-6 h-6 border-white mr-4' onClick={() => handleToggle(id)} />
            {text}
            <button onClick={() => handleExclude(id)} className='p-2 mx-2 border-slate-300 bg-slate-200 rounded-md text-black font-semibold'>Excluir</button>
            <button onClick={editItem} className='p-2 mx-2 border-slate-300 bg-slate-200 rounded-md text-black font-semibold'>Editar</button>
        </li>
    )
}
