"use client"
import StudentTable from '@/COMPONENTS/StudentTable';
import Greeting01 from '@/COMPONENTS/Greeting01';
import Rating01 from '@/COMPONENTS/Rating01';
import { students } from '@/data/Data';
import CustomButton from '@/COMPONENTS/CustomButton';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Person } from '@/types/Person';
import { TodoItem } from '@/types/TodoItem';

const Page = () => {


  const [itemInput, setItemInput] = useState("");

  const [list, setList] = useState<TodoItem[]>([
    { label: "Fazer compras", checked: false },
    { label: "Comprar bolo", checked: true },
    { label: "Comprar Margarina", checked: false },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;


    setList([...list, { label: itemInput, checked: false }]);
    setItemInput("");
  }

  const deleteItem = (index: number) => {
    setItemInput("");
    setList(list.filter((i, key) => key !== index))
  }

  const ToggleItem = (index: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (index === parseInt(i)) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);

  }


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-2xl'>
      <h1 className='text-4xl mt-5'>Lista de tarefas</h1>

      <div className='flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-200'>
        <input type="text" placeholder='O que você deseja fazer ?' value={itemInput} onChange={e => setItemInput(e.target.value)}
          className='flex-1 border border-black p-3 text-2xl text-black rounded-md mr-4' />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className='text-3xl p-3 bg-slate-400 rounded-md mb-5'>{list.length} items na lista</p>

      <ul className='w-full max-w-lg list-none pl-5'>
        {list.map((item, index) => (
          <li key={index}>
            <input onChange={() => ToggleItem(index)} type="checkbox" checked={item.checked} className='w-6 h-6 mr-3' />
            {item.label} - <button onClick={() => deleteItem(index)} className='hover: underline'>[Deletar]</button>
          </li>
        ))}
      </ul>

    </div>
  )

}

export default Page;

